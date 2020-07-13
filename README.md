# Raito

A cli that aims to managing files

### Install

``` 
npm install -g raito
```

### Show all link

``` 
moon list
```

``` 
╔═══════════════════════╤═══════════════════════════════╤══════╤═══════════╗
║ Folder Name           │ Path                          │ Go   │ Des       ║
╟───────────────────────┼───────────────────────────────┼──────┼───────────╢
║ dashboardbusiness     │ D:\WORK\dashboardbusiness     │ gmh2 │ vue       ║
╟───────────────────────┼───────────────────────────────┼──────┼───────────╢
║ electricbeans         │ D:\WORK\electricbeans         │ paa7 │ H5        ║
╟───────────────────────┼───────────────────────────────┼──────┼───────────╢
║ chargechangebackstage │ D:\WORK\chargechangebackstage │ qmy8 │ vue       ║
╟───────────────────────┼───────────────────────────────┼──────┼───────────╢
║ chargexchangmini2     │ D:\WORK\chargexchangmini2     │ byw7 │ wxminiapp ║
╚═══════════════════════╧═══════════════════════════════╧══════╧═══════════╝

```

### Add a new folder link

``` 
moon add 'DESCRIPTION'
```

### Del a link

``` 
moon del [goid]
```

### Show the current path

``` 
moon pwd
```

### Clear all Link

``` 
moon clear
```

### Go to link

``` 
moon go [goid]
```
