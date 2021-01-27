npm i -g contentful-cli
# 1. Create your contentful account, 
# 2. Create a blank space and find the space-id https://www.contentful.com/help/find-space-id/, fill it into import-config.json
# 3. Create your Personal access tokens https://www.contentful.com/help/personal-access-tokens/, fill it into import-config.json
contentful space import --config import-config.json

# export your content with following command
contentful space export --space-id <space id> --skip-roles --skip-webhooks --download-assets
