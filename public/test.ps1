Clear-Host
cd D:\resposity\redux-actions-demo\public
[int] $i = 1
Get-ChildItem -Path .\images -Filter *.jpg |
ForEach-Object{
    $extension = $_.Extension;
    $newName = 'pic_{0}{1}' -f $i , $extension;
    Rename-Item -Path $_.FullName -NewName "test_$i$extension";
    $i++;
}


