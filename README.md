# marvin
[![Build Status](https://travis-ci.com/mtodescato/marvin.svg?token=R8wzNYi4NLcvzgP4seCd&branch=master)](https://travis-ci.com/mtodescato/marvin)

# Metamask fake accounts created from start-all script

### Available Accounts
0. 0xd915bb5fcf25ff607f852fa77822dfc757abd9ba
1. 0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4
2. 0xea6d486f25bb15045051ed4e9c63d9781dcf9c87
3. 0x095163ece9b776e8c87a1c8949731d18272199c9
4. 0xd59ce5657009c7bc357317fa05a7df3b77585485
5. 0x4c3408f13b6bdd5ab0b2af10afc9985dd84553a9
6. 0xbb1c5ecd6182f7b1095e5281d0105bbcb589238d
7. 0x1b23075e7d9fa21cadb1af0bf624d80dfdf084d3
8. 0x8422fd812f503ea73df496b884b007cb0b39ae7e
9. 0x98b8a8c987ab6037ff014178e7ee05a7605d38f3

### Private Keys
0. 037cd08a4b7f853ff3bbc961178edcf2d4a8ecb07a013e8a9842713b74e2fa57
1. 85a93eacf89b8ae360922d28427c38c3d17e907da98ae1aaab92e0381a882137
2. 11ac6cbcdfe499ca56ca019c5844ffc4c366568ab865b52eca0dcdd0822b2c9a
3. 01a5c210c8b63cc6c3374a1c38e905f9297705e0dd1345847dbe5b621cca7e7c
4. 5732aab290ebef462af68827afe9afd046c1fce5366bd7a624ceb7b406d4fe8c
5. 11bf9ad79cadf8f80fc34e3d4f954a27a419c5a41f72e446bbd757ec3f689159
6. 7dd22bff4bb9193e5085346cc5ae05dcc7576f342f3a0884ffb3d59ac37e87ac
7. 27bcba724edba5c6b28fc91a54c37a656ed55595552bd94892f9599143742b5f
8. 46234019703d576b433db67e0f5d727c96cb75abbd980ee04e06ec8b43275ae6
9. 6aad2b6d1d76006edbcde45d8ba89490826ea9319bc846eaea5b0ea53c006d51 

# Databasing

### Exec databasing
```
npm run dbasing
```

### Effects
this script create:
- 10 users
  - 3 owners, (address 0, 1, 2)
  - 3 professors, (address 3, 4, 5)
  - 4 students, (address 6, 7, 8, 9)
- academicYear 2018
- 8 degreeCourses
  - 4 'three-years'
  - 4 'master'
- 2 teachings, assigned to address 3 and 4 for the first degreeCourse called 'Informatica'
- 2 exams, one exam for each teachings
- address 6 subscribed to each exams
- address 7 subscribed to each exams and get marks
