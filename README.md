# Sukelluspaikat

A small webapp for mapping dive sites in Finland and the world.

## Getting it

    git clone git@github.com:bostrom/sukelluspaikat.git
    cd sukelluspaikat
    npm install

## Configuring it

Configuration options are set through environment variables most easily stored in a file called ```.env``` in the root directory. This file must be created and should contain the following configuration options:

    # .env file
    NODE_ENV=production               # development | production
    DB_HOST=localhost                 # database host
    DB_PORT=27017                     # database port
    PORT=3000                         # nodejs server port (where the app will be running)
    GMAPS_API_KEY=your_api_key        # API key for Google maps
    DEBUG=sukelluspaikat:*            # debug configuration for development mode

# Running it

    npm start

Visit [http://localhost:3000](http://localhost:3000) (using default config values).

# License

[ICS](https://opensource.org/licenses/ISC)

Copyright (c) 2016, Fredrik Boström
