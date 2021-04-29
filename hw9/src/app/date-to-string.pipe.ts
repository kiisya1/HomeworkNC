import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateToString"
})
export class DateToStringPipe implements PipeTransform {

  transform(value: Date, output?: string): string {
    let time: string[] = [];
    if (output === "YYYY-MM-DD") {
      const year: string = String(value.getFullYear());
      const month: string = "0" + (value.getMonth() + 1);
      const day: string = "0" + value.getDate();
      time.push(year);
      time.push(month.slice(-2));
      time.push(day.slice(-2));
      return time.join("-");
    }
    if (output === "DD.MM.YYYY") {
      time = [
        "0" + value.getDate(),
        "0" + (value.getMonth() + 1),
      ].map(component => component.slice(-2));
      time.push(String(value.getFullYear()));
      return time.join(".");
    }
    time  = [
      "0" + value.getDate(),
      "0" + (value.getMonth() + 1),
      "0" + value.getFullYear(),
    ].map(component => component.slice(-2));
    return time.join(".");
  }

}
