VERSION=$(cat package.json | jq -r .version)
COMPILER_VERSION=compiler-${VERSION%-*}
npm dist-tag add @rbxts/compiler-types@$VERSION $COMPILER_VERSION
