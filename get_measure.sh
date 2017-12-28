#/usr/bin/env bash

# Sonar Result
SONAR_API_URL="<sonar_host>/api/measures/component"
SONAR_PROJECT_KEY="<component_id>"
SONAR_TOKEN="<user_token>"
SONAR_METRICS="bugs,reliability_rating,vulnerabilities,security_rating,code_smells,sqale_rating,duplicated_lines_density,ncloc,complexity,violations"
SONAR_MEASURE_OUTPUT="./sonar_measure.json"

curl -s --silent -u ${SONAR_TOKEN}: "${SONAR_API_URL}?componentKey=${SONAR_PROJECT_KEY}&metricKeys=${SONAR_METRICS}" | jq -r -c -M '[.component.measures[] | {"key": .metric, "value": (.value|tonumber)}] | from_entries' > ${SONAR_MEASURE_OUTPUT}

