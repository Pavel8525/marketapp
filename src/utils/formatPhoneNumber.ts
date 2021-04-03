import parseNumber from "./parseNumber";

const formatPhoneNumber = (phone: string): string => {
  const number = parseNumber(phone);
  if (number === "") {
    return "";
  }
  const cleaned = number.replace(/\D/g, "");
  const match1 = cleaned.match(/^(\d{3})/);
  const match2 = match1 && cleaned.match(/^(\d{3})(\d{3})/);
  const match3 = match2 && cleaned.match(/^(\d{3})(\d{3})(\d{2})/);
  const match4 = match3 && cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (match1) {
    if (match2) {
      if (match3) {
        if (match4) {
          return `${match4[1]}-${match4[2]}-${match4[3]}-${match4[4]}`;
        }
        return `${match3[1]}-${match3[2]}-${match3[3]}-${cleaned.slice(8)}`;
      }
      return `${match2[1]}-${match2[2]}-${cleaned.slice(6)}`;
    }
    return `${match1[1]}-${cleaned.slice(3)}`;
  } else {
    return number;
  }
};

export default formatPhoneNumber;
