type user = {
    id:number;
    name:string;
    email:string;
}

export function extractEmails(users:user[]) {
    let mails:string[] = []
    users.forEach(element => {
        if(element!=null && !mails.includes(element.email)){
            mails.push(element.email)
        }
    });
    return mails
}
