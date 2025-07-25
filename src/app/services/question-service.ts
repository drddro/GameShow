import { Injectable } from '@angular/core';
import {Question} from "../models/Question";

/*
Welches chemische Element hat die Ordnungszahl 1?:Wasserstoff:100:Wissenschaft
Wer malte die Mona Lisa?:Leonardo da Vinci:100:Kultur
Was ist die Hauptstadt von Australien?:Canberra:100:Geografie
Wann fiel die Berliner Mauer?:9. November 1989:100:Geschichte
Wer entwickelte die Relativitätstheorie?:Albert Einstein:200:Wissenschaft
Welches Instrument spielt ein Cellist?:Cello:200:Kultur
Welcher ist der längste Fluss Deutschlands?:Rhein:200:Geografie
Wer war der erste deutsche Bundeskanzler?:Konrad Adenauer:200:Geschichte
Welches ist das härteste natürliche Material?:Diamant:300:Wissenschaft
Wer schrieb "Faust"?:Johann Wolfgang von Goethe:300:Kultur
Wie viele Kontinente gibt es?:7:300:Geografie
In welchem Jahr wurde die erste E-Mail in Deutschland empfangen?:1984:300:Geschichte
Wie viele Chromosomenpaare hat ein Mensch?:23:400:Wissenschaft
In welcher Stadt steht die Sixtinische Kapelle?:Vatikanstadt:400:Kultur
Welches ist der tiefste See der Erde?:Baikalsee:400:Geografie
Welches antike Weltwunder stand in Alexandria?:Der Leuchtturm:400:Geschichte
Was ist die kleinste Einheit des digitalen Speichers?:Bit:500:Wissenschaft
Wer komponierte die "Mondscheinsonate"?:Ludwig van Beethoven:500:Kultur
Wie hoch ist der Mount Everest?:8848:500:Geografie
Wann wurde die erste deutsche Eisenbahnstrecke eröffnet?:1835:500:Geschichte
Steht in Paris; Ist hoch; Ist aus Stahl: Eifelturm:200:Sehenswürdigkeiten
Steht in Rom; Ist rund; Haben die Römer gabaut: Kolosseum:300:Sehenswürdigkeiten
Steht in Berlin; Ist groß; War mal orange: Brandenburger Tor:400:Sehenswürdigkeiten
Steht in Ägypten; Ist eine Geometrische Form; Ist alt: Pyramiden:500:Sehenswürdigkeiten
Steht in Pisa; Ist schief; Ist ein Wahrzeichen: Der schiefe Turm von Pisa:600:Sehenswürdigkeiten
$1.jpg:Ein Bild mit der Zahl 1:100:Bild
$2.jpg:Ein Bild mit der Zahl 2:200:Bild
$3.jpg:Ein Bild mit der Zahl 3:300:Bild
$4.jpg:Ein Bild mit der Zahl 4:400:Bild
$5.jpg:Ein Bild mit der Zahl 5:500:Bild
*/

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private counter = 0;
  private questions: Question[] = [];
  constructor() { }

  addQuestions(questions: string[]){
    for (let question of questions) {
      question = question.trim();
      this.questions.push(this.parseQuestionString(question));
    }
  }

  parseQuestionString(questionString: string): Question {
    const parts = questionString.split(":");
    const isPicture = parts[0].indexOf('$') === 0;
    const isHint = parts[0].indexOf(';') >= 0;
    return{
      id: this.counter++,
      question: this.getQuestionFieldByType(parts[0], isPicture, isHint),
      answer: parts[1],
      points: parseInt(parts[2]),
      category: parts[3],
      is_picture: isPicture,
      is_hint: isHint,
      is_answered: false,
    }
  }

  getQuestionFieldByType(questionField: string, isPicture: boolean, isHint: boolean): string | string[] {
    if(isPicture) {
      return questionField.substring(1);
    } else if(isHint) {
      return questionField.split(';');
    } else {
      return questionField;
    }
  }

  clearQuestions() {
    this.questions = [];
  }

  getOrderedQuestions(): Map<String, Question[]> {
    const output = new Map<String, Question[]>();
    for(const question of this.questions){
      if(!output.has(question.category)) {
        output.set(question.category, [question]);
      }else{
        const arr = output.get(question.category);
        if(!arr) continue;
        arr.push(question);
        output.set(question.category, arr);
      }
    }
    return output;
  }

  isReady(): boolean {
    return this.questions.length >= 30;
  }

  getQuestionById(questionId: number) {
    for(const question of this.questions) {
      if(question.id === questionId) return question;
    }
    return null;
  }
}
