Communication Strategies Between Services

###Sync
Services communicate with each other using direct requests

###Async 
Services communicate with each other using events



Conceptually easy to Understand
Service D wont need a database


Introduces dependency between services
If any interservice request fails ,the overall request fails
The entire request is only as fast as the slowest request
Can easily introduce web of requests