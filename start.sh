echo Starting metro
npm run android &
echo Starting flask server
cd flask_server
start bash -c "python server.py"
