## node + express + ts + postgresql + sequelize


### RUN
* psql postgresql://postgres:password@localhost:11543
* database sap_demo;
* add constraint( foreignkey && delete cascade) manually (todo)
* docker-compose build && docker-compose up

### TODO:
1. sequelize migration cant process foreign reference   
2. ts migration
3. column char length constraint
3. request data validation
4. handle error elegantly


### API:

* GET /package   
* POST /package   
params: {name, description}
* PUT /package/:id  
{name, description}
* DELETE /package/:id  delete cascade
* GET /package/:id 
* POST /package/:id/version     
params: {version}
* GET /package/:id/version/:versionId 
* UPDATE /package/:id/version/:versionId   
params: {version}
* DELETE /package/:id/version/:versionId 
