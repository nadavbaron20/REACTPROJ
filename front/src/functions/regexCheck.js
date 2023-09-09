import { toast } from "react-toastify";
import userService from "../services/user.service.js";
import { emailRegex, passwordRegex, phoneRegex } from "../utils/utils.js";

export const regexCheck = async (formValues, setValidationMsg, action) => {
    if (formValues.phone) {
        if (!phoneRegex.test(formValues?.phone)) {
            setValidationMsg({ show: true, txt: `מספר הטלפון לא תקין` });
        }
    }
    else if (!emailRegex.test(formValues?.email)) {
        setValidationMsg({ show: true, txt: `אימייל לא תקין` });
    }
    else if (!passwordRegex.test(formValues?.password)) {
        setValidationMsg({ show: true, txt: `סיסמא חייבת להיות 10 אותיות עם אות אחת גדולה` });
    }
    else {
        if (action === `register`) {
            userService.register(formValues).then((res) => {
                toast(res.data);
            });
            setValidationMsg({ show: false, txt: `` });
        } else if (action === `login`) {
            setValidationMsg({ show: false, txt: `` });
            return true
        }
    }
}