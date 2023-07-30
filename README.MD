# Ecommerce Application

## Environment Variables

- NODE_ENV
- PORT
- CONNECTION_STRING
- EMAIL_USER
- EMAIL_PASS
- TOKEN_SECRET

## Data Models:

1. Users

2. Products

3. Orders

4. Payment

5. Wishlist

6. Cart

## Roles:

- Cutomer
- Admin
- Seller

## routes:

1. USER

   - CREATE_USER
   - UPLOAD_USER_IMAGE
   - GET_ALL_USERS
   - GET_USER_BY_ID
   - UPDATE_USER
   - DELETE_USER

2. PRODUCT

   - CREATE_PRODUCT
   - UPDATE_PRODUCT
   - DELETE_PRODUCT
   - LIST_PRODUCTS
   - GET_PRODUCT_BY_ID

3. ORDER

   - CREATE_ORDER
   - GET_ORDER_BY_ID
   - LIST_ORDERS
   - UPDATE_ORDER_STATUS
   - CANCEL_ORDER
   - GET_ORDERS_BY_CUSTOMER_ID

4. PAYMENT

   - CREATE_PAYMENT
   - GET_PAYMENT_BY_ORDER_ID

5. WISHLIST

   - ADD_TO_WISHLIST
   - GET_WISHLIST_BY_CUSTOMER_ID
   - REMOVE_FROM_WISHLIST

6. CART
   - CREATE_CART
   - GET_CART_BY_USER_ID
   - ADD_TO_CART
   - UPDATE_CART_ITEM_QUANTITY
   - REMOVE_FROM_CART
