import React from 'react';

const getErrorMessage = (errorMsg, cnt) => {
  let titleTemp = '';
  let messageTemp = '';

  switch (errorMsg) {
    case 'ERR_ORDR_PROD_001':
      titleTemp = '판매종료';
      messageTemp = <span>선택하신 상품의 판매가 종료되었습니다.</span>;
      break;
    case 'ERR_ORDR_PROD_002':
      titleTemp = '상품품절';
      messageTemp = <span>선택하신 상품이 품절되었습니다.</span>;
      break;
    case 'ERR_ORDR_PROD_003':
      titleTemp = '재고부족';
      messageTemp = (
        <>
          <span>재고수량이 부족합니다.</span>
          <br />
          <span>재고수량 : {cnt}개</span>
        </>
      );
      break;
    case 'ERR_ORDR_PROD_004':
      titleTemp = '파트너 정보 없음';
      messageTemp = <span>선택하신 상품의 판매자 정보가 없습니다.</span>;
      break;
    case 'ERR_ORDR_PROD_005':
      titleTemp = '수량초과';
      messageTemp = (
        <span>선택하신 상품의 최대 구매수량을 초과하였습니다.</span>
      );
      break;
    case 'ERR_ORDR_PROD_006':
      titleTemp = '수량미달';
      messageTemp = (
        <span>선택하신 상품의 최소 구매수량을 만족하지 못하였습니다.</span>
      );
      break;
    case 'ERR_ORDR_PROD_007':
      titleTemp = '금액변경';
      messageTemp = (
        <>
          <span>선택하신 상품의 금액이 변동되었습니다.</span>
          <br />
          <span>확인 후 결제를 진행해주세요.</span>
        </>
      );
      break;
    case 'ERR_ORDR_PROD_008':
      titleTemp = '배송지확인';
      messageTemp = (
        <>
          <span>상품이 배송될 배송지 정보가 없습니다.</span>
          <br />
          <span>확인 후 결제를 진행해주세요.</span>
        </>
      );
      break;
    case 'ERR_ORDR_CANCL_001':
    case 'ERR_ORDR_CANCL_002':
      titleTemp = '주문취소';
      messageTemp = (
        <>
          <span>배송중인 상품은 주문을 취소할 수 없습니다.</span>
          <br />
          <span>확인 후 반품 신청을 진행해주세요.</span>
        </>
      );
      break;
    default:
      titleTemp = '시스템 오류';
      messageTemp = (
        <>
          <span>잠시 후 다시 시도해주세요.</span>
          <br />
          <span>오류가 지속될 경우 관리자에게</span>
          <br />
          <span>문의해주세요.</span>
        </>
      );
      break;
  }

  return { title: titleTemp, message: messageTemp };
};

const getPaymentErrorMessage = (errorMsg) => {
  let titleTemp = '';
  let messageTemp = '';

  switch (errorMsg) {
    case 'ERR_ORDR_PROD_001':
      titleTemp = '판매종료';
      messageTemp = (
        <>
          <span>선택하신 상품의 판매가 종료되어</span>
          <br />
          <span>결제를 진행 할 수 없습니다.</span>
        </>
      );
      break;
    case 'ERR_ORDR_PROD_002':
      titleTemp = '상품품절';
      messageTemp = (
        <>
          <span>선택하신 상품이 품절되어</span>
          <br />
          <span>결제를 진행 할 수 없습니다.</span>
        </>
      );
      break;
    case 'ERR_ORDR_PROD_003':
      titleTemp = '재고부족';
      messageTemp = (
        <>
          <span>선택하신 상품의 재고가 부족하여</span>
          <br />
          <span>결제를 진행 할 수 없습니다.</span>
        </>
      );
      break;
    case 'ERR_ORDR_PROD_004':
      titleTemp = '파트너 정보 없음';
      messageTemp = (
        <>
          <span>선택하신 상품의 판매자 정보가 없어</span>
          <br />
          <span>결제를 진행 할 수 없습니다.</span>
        </>
      );
      break;
    case 'ERR_ORDR_PROD_005':
      titleTemp = '수량초과';
      messageTemp = (
        <>
          <span>선택하신 상품의 최대 구매수량을 초과하여</span>
          <br />
          <span>결제를 진행 할 수 없습니다.</span>
        </>
      );
      break;
    case 'ERR_ORDR_PROD_006':
      titleTemp = '수량미달';
      messageTemp = (
        <>
          <span>선택하신 상품의 최소 구매수량을 만족하지 못하여</span>
          <br />
          <span>결제를 진행 할 수 없습니다.</span>
        </>
      );
      break;
    case 'ERR_ORDR_PROD_007':
      titleTemp = '금액변경';
      messageTemp = (
        <>
          <span>선택하신 상품의 금액이 변동되어</span>
          <br />
          <span>결제를 진행 할 수 없습니다.</span>
        </>
      );
      break;
    case 'ERR_ORDR_PROD_008':
      titleTemp = '배송지확인';
      messageTemp = (
        <>
          <span>상품이 배송될 배송지 정보가 없어</span>
          <br />
          <span>결제를 진행 할 수 없습니다.</span>
        </>
      );
      break;
    default:
      titleTemp = '시스템 오류';
      messageTemp = (
        <>
          <span>잠시 후 다시 시도해주세요.</span>
          <br />
          <span>오류가 지속될 경우 관리자에게</span>
          <br />
          <span>문의해주세요.</span>
        </>
      );
      break;
  }

  return { title: titleTemp, message: messageTemp };
};

export { getErrorMessage, getPaymentErrorMessage };
