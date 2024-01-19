import { AppLink, Button, Form, Icon, Input, Text } from "@/shared/ui"
import { HStack } from "@/shared/ui/Stack/HStack"
import { VStack } from "@/shared/ui/Stack/VStack"
import cls from '../LoginForm/LoginForm.module.scss'
import { LogoSvg } from "@/shared/ui/Logo/Logo"
import { RegisterFormValues, useRegisterForm } from "../../model/schema/useRegisterForm"

export const RegisterForm = () => {

    const {register , watch , handleSubmit , errors , isValid , RegisterFormNames , } = useRegisterForm()

    const onSubmit = (data: RegisterFormValues) => {
        delete data.cf_password
        console.log(data)
    }
    return (
        <HStack justify="center">
            <VStack className={cls.auth} gap={12}>
              <VStack className={cls.authTop} gap={12} align="center">
                
                <VStack align="center">
                    <LogoSvg />
                    <Text align="center">
                        Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
                    </Text>
                </VStack>

                
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <VStack gap={16} align="center">
                        <VStack align="center" gap={22}>
                            <VStack gap={12}>
                                <Button max  variant="outline" addonLeft={<Icon type="Facebook" />}>
                                    Войти через Facebook
                                </Button>
                            </VStack>
                        </VStack>
                        <Text>Или</Text>

                        <Input
                            {...register(RegisterFormNames.EMAIL)}
                            value={watch(RegisterFormNames.EMAIL)}
                            error={errors?.email?.message}
                            placeholder="Телефон или эл.адрес"
                         />
                        <Input
                            {...register(RegisterFormNames.FULLNAME)}
                            value={watch(RegisterFormNames.FULLNAME)}
                            error={errors?.fullname?.message}
                            placeholder="Имя и фамилия"
                         />
                        <Input
                            {...register(RegisterFormNames.USERNAME)}
                            value={watch(RegisterFormNames.USERNAME)}
                            error={errors?.username?.message}
                            placeholder="Имя пользователя"
                         />
                        <Input
                            type="password"
                            {...register(RegisterFormNames.PASSWORD)}
                            value={watch(RegisterFormNames.PASSWORD)}
                            error={errors?.password?.message}
                            placeholder="Пароль"
                         />
                        <Input
                            type="password"
                            {...register(RegisterFormNames.CF_PASSWORD)}
                            value={watch(RegisterFormNames.CF_PASSWORD)}
                            error={errors?.cf_password?.message}
                            placeholder="Повторить пароль"
                         />                                                                                                      

                        <Text size={12} color="gray" align="center">
                            Регистрируясь, вы принимаете Условия. Прочитайте Политика
                            конфидициальности, чтобы узнать, как мы получаем, используем и
                            передаем ваши данные. Также просмотрите Политику в отношении
                            файлов cookie, чтобы узнать, как мы используем файлы cookie и
                            подобные технологии.
                        </Text>                       

                        <Button disabled={!isValid} max>Регистрация</Button>
                    </VStack>
                </Form>
              </VStack>
    
    
              <HStack className={cls.authBottom} align="center" gap={8} justify="center">
                  <Text tag="span">Есть аккаунт?</Text>
                  
                  <AppLink to={'/login'}>
                    <Text color="blue" size={12} tag="span">Вход</Text>
                  </AppLink>
              </HStack>
            </VStack>
        </HStack>
            
      )
}
