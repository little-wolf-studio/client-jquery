#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail

. settings

if [[ -z ${GEN_ROOT:-} ]]; then
    : "${GEN_COMMIT?Need to set GEN_COMMIT to kubernetes-client/gen commit}"
    TEMP_FOLDER=$(mktemp -d)
    trap "rm -rf ${TEMP_FOLDER}" EXIT SIGINT

    GEN_ROOT="${TEMP_FOLDER}/gen"
    echo ">>> Cloning gen repo"
    # TODO: Update pending: https://github.com/kubernetes-client/gen/pull/160
    git clone --recursive https://github.com/little-wolf-studio/gen.git "${GEN_ROOT}"
    (cd ${GEN_ROOT} && git checkout ${GEN_COMMIT})
else
    echo ">>> Reusing gen repo at ${GEN_ROOT}"
fi

TYPESCRIPT="${GEN_ROOT}/openapi/typescript-jquery.sh"
echo ">>> Running ${TYPESCRIPT}"
${TYPESCRIPT} src/gen settings
echo ">>> Done."