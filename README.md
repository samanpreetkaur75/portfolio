



### Build the Docker Image

From within the project directory, build the Docker image using the following command:

```bash
docker build -t kaur_samanpreet_coding_assignment14 .
```

This command builds a Docker image named `kaur_samanpreet_coding_assignment14` based on the instructions in the `Dockerfile`.

### Run the Container

Once the image is built, you can run the container using:

```bash
docker run -d -p 5575:5575 --name kaur_samanpreet_coding_assignment14_container kaur_samanpreet_coding_assignment14
```

This command starts a container named `kaur_samanpreet_coding_assignment14_container`, maps port 5575 on your host to port 5575 on the container, and runs in detached mode.

### Access the Application

The portfolio website should now be accessible at `http://localhost:5575`.

## Stopping the Container

To stop and remove the container when you're done, use:

```bash
docker rm -f kaur_samanpreet_coding_assignment14_container
```
