# Car API Server
Car api.
## Getting Started
    git clone https://github.com/sreejithsreeji/car-app.git
### Prerequisites
Docker version 18.06.0-ce, build 0ffa825
docker-compose version 1.21.0, build 5920eb0
### Dependencies
 1. docker installed
 2. docker-compose installed

		
### Starting environment
    cd test-server
    make up
This will start the server in **localhost:3000**
#### Sample Request
    http://localhost:3000/api/v1/cars/sort-by?k1=model

    http://localhost:3000/api/v1/cars/sort-by?k1=model&k2=brand

    http://localhost:3000/api/v1/cars/sort-by?k1=model&k2=brand&k3=trim

    http://localhost:3000/api/v1/cars/sort-by?k1=model&limit=10

    http://localhost:3000/api/v1/cars/sort-by?k1=model&limit=10&page=1



### Logs
#### Api logs

    docker-compose logs -f car_app

## Authors

*  **Sreejith** - *Car API*
