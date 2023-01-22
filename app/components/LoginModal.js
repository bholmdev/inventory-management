import { Formik } from "formik";

const LoginModal = (props) => {
    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </>
    );
};

export default LoginModal;