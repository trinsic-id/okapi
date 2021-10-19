install.packages("reticulate")
library(reticulate)

py_install('okapi')

source_python('okapi_link.py')

did_key <- didkey_create(c(1, 2, 3))
