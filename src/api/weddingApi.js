import axios from "@api/axiosInstance";

// =================================================================
//                            웨딩 API
// =================================================================

// 장바구니 목록
export async function getBasketList() {
  return axios.get(`/api/v1/pa/bask`);
}

// 장바구니 등록
export async function addBaskect(params) {
  return axios.post(`/api/v1/pa/bask`, params);
}

// 장바구니 수정
export async function modifyBasket(baskId, params) {
  return axios.put(`/api/v1/pa/bask/${baskId}`, params);
}

// 장바구니 삭제
export async function removeBasket(baskId) {
  return axios.delete(`/api/v1/pa/bask/${baskId}`);
}

// 장바구니 삭제
export async function removeBasketByList(params) {
  return axios.delete(`/api/v1/pa/bask`, { data: params });
}

// 장바구니 카운트
export async function getBaskectCnt() {
  return axios.get(`/api/v1/pa/bask/cnt`);
}

// =================================================================
//                             주문 API
// =================================================================

// 주문상품 목록
export async function getOrderProductList(
  ordrNo,
  { ptnUserId, dlvrStatDivCd }
) {
  return axios.get(`/api/v1/pa/ordr/list/${ordrNo}`, {
    params: { ptnUserId, dlvrStatDivCd },
  });
}

// 주문상품등록
export async function addOrder(params) {
  return axios.post(`/api/v1/pa/ordr`, params);
}

// 주문상품 상세
export async function getOrderDetail(ordrNo, datSeq) {
  return axios.get(`/api/v1/pa/ordr/${ordrNo}`, {
    params: {
      datSeq,
    },
  });
}

// 주문내역
export async function getMyOrders(params) {
  return axios.get(`/api/v1/pa/ordr/ordr-dtl`, { params });
}

export async function getDeliveryStatus() {
  return axios.get(`/api/v1/pa/ordr/ordr-dtl/dlvr-code`);
}

// 주문/배송 현황 조회
export async function getDlvrInfo() {
  return axios.get(`/api/v1/pa/ordr/ordr-dlvr`);
}

// 주문내역 상세 조회
export async function getMyOrdersDetail(ordrNo) {
  return axios.get(`/api/v1/pa/ordr/ordr-dtl/${ordrNo}`);
}

// 주문내역 삭제
export async function removeOrder(ordrNo) {
  return axios.delete(`/api/v1/pa/ordr/ordr-dtl/${ordrNo}`);
}

// 구매확정
export async function confirmPurchase({ ordrNo, prodId, optSrno }) {
  return axios.post("/api/v1/pa/ordr/confirm", { ordrNo, prodId, optSrno });
}

// =================================================================
//                             결제 API
// =================================================================

// 결제취소 요청상품 예상금액
export async function getEstimatedRefundAmount({
  ordrNo,
  custChngDmndYn,
  productOptions,
}) {
  return axios.put("/api/v1/pa/payment/getPaymentCancelExpectionAmountDTO", {
    ordrNo,
    custChngDmndYn,
    productOptions,
  });
}

// token 조회
export async function getToken() {
  return axios.get(`/api/v1/pa/payment/getToken`);
}

// 사용자 결제 취소
export async function postOrderCancelRequest({
  ordrNo,
  productOptions,
  canclDivCd,
  rtnDivCd,
  resCtt,
  atchdFileSrno,
}) {
  return axios.put("/api/v1/pa/payment/paymentCancel", {
    ordrNo,
    productOptions,
    canclDivCd,
    rtnDivCd,
    resCtt,
    atchdFileSrno,
  });
}

// 결제 전 검증
export async function verificationBeforePayment(params) {
  return axios.put(`/api/v1/pa/payment/verificationBeforePayment`, params);
}

// 결제 후 검증
export async function verificationAfterPayment(params) {
  return axios.put(`/api/v1/pa/payment/verificationAfterPayment`, params);
}

// 결제 실패
export async function paymentFail(params) {
  return axios.put(`/api/v1/pa/payment/paymentFail`, params);
}
