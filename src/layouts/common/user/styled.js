import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { opacity: 0 }
  100% { opactity: 1}
`;

export const AuthAndCart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
  margin-right: 35px;

  .auth {
    align-items: center;
    display: flex;
    cursor: pointer;

    .icon_auth {
      font-size: 35px;
    }

    .user_infor {
      display: none;
      width: 200px;
      padding: 10px;
      background: #fff;
      position: absolute;
      top: 50px;
      box-shadow: #0000002e 0px 6px 12px 0px;
      border: 1px solid #efefef;
      z-index: 1;
      animation: ${rotate};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;

      .text_user-infor {
        margin: 5px;
      }

      .icon_user-infor {
        color: #000;
        margin-right: 10px;
        font-size: 16px;
        margin-top: 2px;
      }

      .icon_user-up {
        padding: 6px 62px;
        color: #fff;
        position: absolute;
        top: -23px;
        left: 23px;
        font-size: 25px;
      }
    }

    .register_login {
      margin: 0 10px;

      .is_login {
        color: #fff;

        &:hover {
          color: #fdd835;
        }
      }
    }

    &:hover {
      .user_infor {
        display: block;
      }
    }
  }

  .cart {
    font-size: 35px;
    margin-left: 20px;
    color: #ffffff;

    .cart_items {
      display: flex;
      align-items: center;

      .cart_quantily {
        background-color: #fdd835;
        border-radius: 50%;
        right: -11px;
        font-weight: 700;
        top: -19px;
        width: 21px;
        color: #000;
        display: flex;
        position: absolute;
        justify-content: center;
      }

      .title_cart {
        font-size: 11px;
        position: absolute;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
