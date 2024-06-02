# Node-JS-Projects

## Node js Installation for login user
```
#!/bin/bash

# Download Node.js
wget https://nodejs.org/dist/v20.14.0/node-v20.14.0-linux-x64.tar.xz

# Extract Node.js
tar -xJf node-v20.14.0-linux-x64.tar.xz

# Move Node.js to /usr/local
sudo mv node-v20.14.0-linux-x64 /usr/local/node-v20

# Add Node.js to PATH
echo 'export PATH=/usr/local/node-v20/bin:$PATH' >> ~/.bashrc

# Reload .bashrc
source ~/.bashrc

# Display Node.js version
node -v

# Display npm version
npm -v
```

## Node Installation for all user in Instance

```
#!/bin/bash

# Download Node.js
wget https://nodejs.org/dist/v20.14.0/node-v20.14.0-linux-x64.tar.xz

# Extract Node.js
tar -xJf node-v20.14.0-linux-x64.tar.xz

# Move Node.js to /usr/local
sudo mv node-v20.14.0-linux-x64 /usr/local/node-v20

# Add Node.js to PATH for all users
echo 'export PATH=/usr/local/node-v20/bin:$PATH' | sudo tee -a /etc/profile.d/node.sh > /dev/null

# Reload profile
source /etc/profile

# Display Node.js version
node -v

# Display npm version
npm -v
```
