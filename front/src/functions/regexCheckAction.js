export const regexCheckAction = async () => {
    userService.register(formValues).then((res) => {
        toast(res.data);
    });
    setValidationMsg({ show: false, txt: `` });
}