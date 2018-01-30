export class Comment {

   constructor (public title: string, public body: string) {}

   toForm(): string {
      return `title=${this.title}&body=${this.body}`;
   }
}
