docker rmi -f $(docker images -q)
docker tag voiceboot:latest voiceboot:previous
docker compose up -d --build