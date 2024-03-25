import * as Yup from "yup";


const validationSchema = Yup.object().shape({
userName: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("*"),
userTel: Yup.string().matches(/^[0-9]{10}$/,'Номер має містити 10 цифр').required('*'),
});

export default validationSchema;