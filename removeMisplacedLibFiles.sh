#!/bin/bash
cd apps
for i in `find . -name "src"`; do echo $i; cd $i; for j in `find . -name "*.js"`; do echo $j; rm $j; done; cd -; done;
for i in `find . -name "src"`; do echo $i; cd $i; for j in `find . -name "*.map"`; do echo $j; rm $j; done; cd -; done;
for i in `find . -name "src"`; do echo $i; cd $i; for j in `find . -name "*.d.ts"`; do echo $j; rm $j; done; cd -; done;
cd ..
cd libs
for i in `find . -name "src"`; do echo $i; cd $i; for j in `find . -name "*.js"`; do echo $j; rm $j; done; cd -; done;
for i in `find . -name "src"`; do echo $i; cd $i; for j in `find . -name "*.map"`; do echo $j; rm $j; done; cd -; done;
for i in `find . -name "src"`; do echo $i; cd $i; for j in `find . -name "*.d.ts"`; do echo $j; rm $j; done; cd -; done;
cd ..
cd schemas
for i in `find . -name "src"`; do echo $i; cd $i; for j in `find . -name "*.js"`; do echo $j; rm $j; done; cd -; done;
for i in `find . -name "src"`; do echo $i; cd $i; for j in `find . -name "*.map"`; do echo $j; rm $j; done; cd -; done;
for i in `find . -name "src"`; do echo $i; cd $i; for j in `find . -name "*.d.ts"`; do echo $j; rm $j; done; cd -; done;
cd ..
