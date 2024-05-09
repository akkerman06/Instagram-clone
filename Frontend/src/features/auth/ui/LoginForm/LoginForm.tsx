import { AppLink, Button, Form, Icon, Input, Text } from "@/shared/ui";
import { HStack } from "@/shared/ui/Stack/HStack";
import { VStack } from "@/shared/ui/Stack/VStack";
import cls from "./LoginForm.module.scss";
import { LogoSvg } from "@/shared/ui/Logo/Logo";
import { LoginFormValues, useLoginForm } from "../../model/schema/useLoginForm";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { loginByEmail } from "../../model/service/loginByEmail";
import { getAuthError } from "../../model/selectors/getAuthError";
import { getAuthLoading } from "../../model/selectors/getAuthLoading";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { register, watch, isValid, errors, handleSubmit, LoginFormNames } =
    useLoginForm();

  const dispatch = useAppDispatch();

  const authError = useSelector(getAuthError);
  const authLoading = useSelector(getAuthLoading);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormValues) => {
    const res = await dispatch(loginByEmail(data));

    if ((res.meta.requestStatus = "fulfilled")) {
      navigate("/");
    }
  };

  return (
    <HStack justify="center">
      <VStack className={cls.auth} gap={12}>
        <VStack className={cls.authTop} gap={40} align="center">
          <LogoSvg />

          <Form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={16} align="center">
              {authError && <Text color="error">{authError}</Text>}
              <Input
                {...register(LoginFormNames.EMAIL)}
                value={watch(LoginFormNames.EMAIL)}
                error={errors?.email?.message}
                placeholder="Телефон , имя пользователя или эл.адрес"
              />

              <Input
                {...register(LoginFormNames.PASSWORD)}
                type="password"
                value={watch(LoginFormNames.PASSWORD)}
                error={errors?.password?.message}
                placeholder="пароль"
              />

              <Button
                max
                disabled={!isValid && authLoading}
                loading={authLoading}
              >
                Войти
              </Button>

              <Text>Или</Text>
              <VStack align="center" gap={12}>
                <Button
                  max
                  variant="outline"
                  addonLeft={<Icon type="Google" />}
                >
                  Войти через Google
                </Button>

                <Button
                  max
                  variant="outline"
                  addonLeft={<Icon type="Facebook" />}
                >
                  Войти через Facebook
                </Button>

                <AppLink to={"/register"}>
                  <Text tag="span">Забыли пароль?</Text>
                </AppLink>
              </VStack>
            </VStack>
          </Form>
        </VStack>

        <HStack
          className={cls.authBottom}
          align="center"
          gap={8}
          justify="center"
        >
          <Text tag="span">У вас еще нет аккаунта?</Text>

          <AppLink to={"/register"}>
            <Text color="blue" size={12} tag="span">
              Зарегистрироваться
            </Text>
          </AppLink>
        </HStack>
      </VStack>
    </HStack>
  );
};
