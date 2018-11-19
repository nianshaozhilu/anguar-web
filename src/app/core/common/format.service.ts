export class  Format{
    public timestampFormat (index:any, format?:string):string {
        let timestamp = parseInt(index);
        if(index) {
            let date = new Date(timestamp);
            let y = date.getFullYear();
            let m = (date.getMonth()+1)>10 ?  (date.getMonth()+1) :"0"+(date.getMonth()+1);
            let d = (date.getDate()+1)>10 ? date.getDate() :"0"+date.getDate();
            let hh =  (date.getHours()+1)>10 ? date.getHours() :"0"+date.getHours();
            let ss =  (date.getSeconds()+1)>10 ? date.getSeconds() :"0"+date.getSeconds(); 
            let mm = (date.getMilliseconds()+1)>10 ? date.getMilliseconds() :"0"+date.getMilliseconds();
          
            if(format == 'YY-MM-DD') {
                return y +"-"+m+"-"+d;
            } else if(format ==  'YY-MM-DD hh:ss:mm') {
                return y +"-"+m+"-"+d + ' '+hh+':'+ss+':'+mm;
            } else {
                return y +"-"+m+"-"+d;
            }
        
        } else {
        return '';
        }
    }

    public  changLongLat (arr) {
        let cArr = arr;
         if(arr[1]>30) {
             if(arr[0]<-10) {
                     cArr[0] = parseFloat(arr[0])+180;
             } else {
                     cArr[0] = parseFloat(arr[0])-180;
             }
         }  else {
             if(arr[0]<-18) {
                     cArr[0] = parseFloat(arr[0])+180;
             } else {
                     cArr[0]= parseFloat(arr[0])-180;
             }
         }
        return cArr;
    }

}

