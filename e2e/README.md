# Run Cypress tests

1. Get the cypress docker image `docker pull cypress/included:3.8.1`
2. Start the jekyll server `bundle exec jekyll serve`
3. Run the tests `docker run -it -v $PWD:/e2e -w /e2e -e CYPRESS_baseUrl=http://host.docker.internal:4000 cypress/included:3.8.1`


Explanation of the "docker run" command line arguments:

 -it                      = interactive terminal
 -v $PWD:/e2e             = map current folder to /e2e inside the container
 -w /e2e                  = set working directy to /e2e
 -e CYPRESS_baseUrl=...   = pass environment variable CYPRESS_baseUrl
 cypress/included:3.8.1   = name of the Docker image with tag
 host.docker.internal     = talks to the hosts server at the right port