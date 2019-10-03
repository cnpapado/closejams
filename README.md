# gigmix 
You like a band. And another one. And you MUST travel and see them all

Mini flask application computing nearest pair of conserts (in terms of both geo distance and time) given by two music groups each while on tour across Europe. Data fetched from **the_API_i_will_use**. 

Consert events' are represented by a point in 3d space based in it's geo location and date. An efficient nearest-neighbor data structure (particularly a kd-tree) is used to find the closest pair of points, one from each set. This is also known as *closest bichromatic pair problem* or as *General TSP* with two sets.
