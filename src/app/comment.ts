export class Comment {

   constructor (public userID: string, public id: string, public title: string, public body: string) {}

   toForm(): string {
      return `title=${this.title}&body=${this.body}`;
   }
}
