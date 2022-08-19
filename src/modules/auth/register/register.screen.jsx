import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  ManOutlined,
  CalendarOutlined,
  PhoneOutlined,
  LoginOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { replace } from 'lodash';

import { useAuthStore } from '../../../hooks/useAuth';
import { schema } from './schema';
import { Button, ContentRegister, Error, FormRegister, ScreenRegister, Wrapper } from './styled';
import FieldRegister from './component/fieldRegister';
import { LOGO_REGISTER } from '../../../assets/imgs/layout/index';

function RegisterScreen() {
  const { t } = useTranslation(['register', 'common']);

  const { registerUser } = useAuthStore();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    registerUser({ email: data.email, password: data.password }, () => {
      navigate('/login', replace(true));
    });
  };

  return (
    <Wrapper>
      <ScreenRegister>
        <div className='logo-register'>
          <img className='logo_register-focus' src={LOGO_REGISTER} alt='banner' />
        </div>
        <FormRegister>
          <ContentRegister>
            <h2 className='text_header-register'>
              <LoginOutlined className='mr-icon' />
              {t('sign_up')}
            </h2>
            <Link to='/' className='back-home'>
              <HomeOutlined className='mr-icon' />
              {t('common:home')}
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <FieldRegister t={t} nameField={'email'} register={register} Icon={MailOutlined} type={'text'} />
              <Error className='error'>
                <div className='mr-error' />
                <div className='title-error'>{errors.email ? t(errors.email?.message) : ''}</div>
              </Error>

              {/* Password */}
              <FieldRegister t={t} nameField={'password'} register={register} Icon={LockOutlined} type={'text'} />
              <Error className='error'>
                <div className='mr-error' />
                <div className='title-error'>{errors.password ? t(errors.password?.message) : ''}</div>
              </Error>
              {/* Full Name */}
              <FieldRegister t={t} nameField={'full_name'} register={register} Icon={UserOutlined} type={'text'} />
              <Error className='error'>
                <div className='mr-error' />
                <div className='title-error'>{errors.full_name ? t(errors.full_name?.message) : ''}</div>
              </Error>

              {/* Gender */}
              <FieldRegister t={t} nameField={'gender'} register={register} Icon={ManOutlined} type={'radio'} />
              <Error className='error'>
                <div className='mr-error' />
                <div className='title-error'>{errors.gender ? t(errors.gender?.message) : ''}</div>
              </Error>

              {/* BirthDate */}
              <FieldRegister t={t} nameField={'birth_date'} register={register} Icon={CalendarOutlined} type={'date'} />
              <Error className='error'>
                <div className='mr-error' />
                <div className='title-error'>{errors.birthDate ? t(errors.birthDate?.message) : ''}</div>
              </Error>

              {/* Phone Number */}
              <FieldRegister t={t} nameField={'phone_number'} register={register} Icon={PhoneOutlined} type={'text'} />
              <Error className='error'>
                <div className='mr-error' />
                <div className='title-error'>{errors.phone_number ? t(errors.phone_number?.message) : ''}</div>
              </Error>

              {/* Button Submit Register */}
              <div className='submit-register'>
                <Button className='title-input title-button'>{t('sign_up')}</Button>
              </div>
              <div className='login-help'>
                {t('you_have_account')}
                <Link to='/login' className='ml-10'>
                  {t('login_now')}
                </Link>
              </div>
            </form>
          </ContentRegister>
        </FormRegister>
      </ScreenRegister>
    </Wrapper>
  );
}

export default RegisterScreen;
