<template>
  <button @click="toggleModal" class="toggle-form">
    <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2123_1062)">
        <path
          d="M0.473633 85.7646L6.491 63.8366C2.77355 57.4039 0.820887 50.1067 0.829867 42.6806C0.839667 19.3476 19.8642 0.365234 43.2425 0.365234C54.5873 0.370988 65.2357 4.77743 73.2441 12.7762C81.2524 20.775 85.6587 31.4071 85.6546 42.7146C85.6442 66.0458 66.6168 85.0317 43.242 85.0317H43.2235C36.1259 85.0288 29.1517 83.2516 22.9568 79.8802L0.473633 85.7646Z"
          fill="#4278FA" />
        <path
          d="M30.667 35.3327C30.667 30.666 33.3337 28.666 37.3337 28.666H50.667C54.667 28.666 57.3337 30.666 57.3337 35.3327V44.666C57.3337 49.3327 54.667 51.3327 50.667 51.3327H37.3337"
          stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M50.6663 36L46.493 39.3333C45.1197 40.4267 42.8663 40.4267 41.493 39.3333L37.333 36" stroke="white"
          stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M30.667 46H38.667" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M30.667 40.666H34.667" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round" />
        <path
          d="M43.2061 71.8739C45.2494 71.8739 46.6378 73.2855 46.6378 75.4467C46.6378 77.5397 45.3472 79 43.2061 79C41.2214 79 40.1264 77.7442 39.97 76.2352H41.1236C41.2019 77.199 41.9253 78.046 43.2061 78.046C44.614 78.046 45.4841 76.9654 45.4841 75.4467C45.4841 73.8404 44.4869 72.828 43.2061 72.828C41.9449 72.828 41.2312 73.7528 41.1236 74.5121H39.97C40.1655 73.1103 41.2801 71.8739 43.2061 71.8739Z"
          fill="white" />
        <path
          d="M37.5799 71.2766C39.4497 71.647 40.6267 73.1903 40.1804 75.4245C39.7341 77.6588 38.0536 78.6361 36.1837 78.2658C34.3235 77.8973 33.1465 76.354 33.5928 74.1198C34.0391 71.8855 35.7196 70.9082 37.5799 71.2766ZM37.393 72.2123C36.202 71.9864 35.0638 72.6443 34.7243 74.3439C34.3829 76.053 35.1892 77.0564 36.3744 77.311C37.5692 77.5675 38.7075 76.9095 39.0489 75.2004C39.3884 73.5009 38.5935 72.4402 37.393 72.2123Z"
          fill="white" />
        <path
          d="M27.8452 75.3816L26.8155 74.9569L29.4345 68.6611L30.8255 69.2348L31.7846 75.4258L33.8424 70.4791L34.8631 70.9001L32.2441 77.1959L30.8621 76.6259L29.903 70.4349L27.8452 75.3816Z"
          fill="white" />
        <path
          d="M27.3515 67.2711L24.1034 72.1116L25.8105 73.2474L25.2564 74.073L20.9155 71.1849L21.4695 70.3592L23.1766 71.495L26.4248 66.6546L27.3515 67.2711Z"
          fill="white" />
        <path
          d="M15.5408 68.6883L17.0894 68.4268L17.5802 68.9155L16.4326 69.5763L15.5408 68.6883ZM21.1267 61.9836L20.3386 63.6357L22.2743 65.5631L23.9335 64.7784L24.7631 65.6044L18.0849 68.592L17.2968 67.8072L20.2971 61.1575L21.1267 61.9836ZM21.3203 66.0174L19.8823 64.5856L18.5757 67.3185L21.3203 66.0174Z"
          fill="white" />
        <path
          d="M18.8087 58.5763C19.9439 60.268 19.5365 62.2016 17.7318 63.4023C15.984 64.5651 14.0477 64.308 12.8582 62.5353C11.7555 60.8921 12.1958 59.2878 13.3689 58.32L14.0099 59.2752C13.2485 59.8754 12.9433 60.9449 13.6548 62.0052C14.437 63.1708 15.8227 63.2909 17.0909 62.4472C18.4322 61.5548 18.7236 60.1667 18.012 59.1063C17.3113 58.0621 16.1425 57.985 15.4487 58.3178L14.8078 57.3627C16.087 56.7458 17.7386 56.9817 18.8087 58.5763Z"
          fill="white" />
        <path
          d="M16.2521 54.1629L10.8507 56.3907L11.6364 58.2795L10.715 58.6595L8.71712 53.8566L9.63844 53.4767L10.4241 55.3654L15.8256 53.1376L16.2521 54.1629Z"
          fill="white" />
        <path
          d="M14.0263 46.3233L12.4493 47.261L12.9833 49.9344L14.8007 50.1998L15.0296 51.3456L7.81 50.1353L7.59256 49.0468L13.7975 45.1776L14.0263 46.3233ZM11.9366 49.7844L11.5399 47.7985L8.92866 49.3479L11.9366 49.7844Z"
          fill="white" />
        <path d="M7 40.6818V39.572H13.8438V41.0712L8.46652 44.3227H13.8438V45.4228H7V43.9333L12.3772 40.6818H7Z"
          fill="white" />
        <path
          d="M14.5997 36.6055C14.2278 38.4673 12.6779 39.6393 10.4341 39.1949C8.19024 38.7505 7.2087 37.0771 7.58063 35.2152C7.95066 33.3629 9.5006 32.191 11.7444 32.6354C13.9882 33.0798 14.9698 34.7532 14.5997 36.6055ZM13.66 36.4193C13.8869 35.2335 13.2262 34.1001 11.5193 33.7621C9.80292 33.4221 8.79522 34.225 8.53953 35.4052C8.28193 36.5949 8.9427 37.7282 10.6591 38.0682C12.3659 38.4063 13.4312 37.6147 13.66 36.4193Z"
          fill="white" />
        <path
          d="M16.2458 31.1569C15.6061 32.6949 14.1884 33.4062 12.8254 32.9178L13.2706 31.8475C14.1331 32.14 14.994 31.6732 15.3607 30.7918C15.7423 29.8744 15.4466 29.1097 14.8776 28.875C14.2814 28.6291 13.7879 28.8997 13.2753 30.1319L13.1294 30.4827C12.6692 31.5889 11.6095 32.2793 10.5527 31.8435C9.57716 31.4411 8.90379 30.2361 9.57724 28.6172C10.2245 27.0612 11.5387 26.4968 12.8768 26.9434L12.4316 28.0137C11.5382 27.719 10.8232 28.1406 10.4715 28.986C10.0973 29.8854 10.3566 30.5087 10.9979 30.7732C11.5218 30.9892 11.9066 30.8529 12.4229 29.6117L12.5202 29.3779C13.0963 27.9928 14.2713 27.3815 15.3191 27.8137C16.2675 28.2049 16.9418 29.484 16.2458 31.1569Z"
          fill="white" />
        <path d="M24.5934 16.8363L24.072 16.0592L26.6733 14.3285L27.1947 15.1056L24.5934 16.8363Z" fill="white" />
        <path
          d="M43.7939 13.1261C41.7506 13.1261 40.3623 11.7145 40.3623 9.5533C40.3623 7.46026 41.6528 6 43.7939 6C45.7786 6 46.8736 7.25582 47.03 8.76476H45.8764C45.7981 7.80099 45.0747 6.95404 43.7939 6.95404C42.386 6.95404 41.5159 8.03463 41.5159 9.5533C41.5159 11.1596 42.5131 12.172 43.7939 12.172C45.0551 12.172 45.7688 11.2472 45.8764 10.4879H47.03C46.8345 11.8897 45.7199 13.1261 43.7939 13.1261Z"
          fill="white" />
        <path
          d="M49.4201 13.7234C47.5503 13.353 46.3733 11.8097 46.8196 9.57547C47.2659 7.34124 48.9465 6.36389 50.8163 6.73423C52.6765 7.10268 53.8535 8.646 53.4072 10.8802C52.9609 13.1145 51.2804 14.0918 49.4201 13.7234ZM49.607 12.7877C50.798 13.0136 51.9362 12.3557 52.2757 10.6561C52.6171 8.94704 51.8108 7.94363 50.6256 7.68903C49.4308 7.43254 48.2925 8.09049 47.9511 9.79958C47.6116 11.4991 48.4065 12.5598 49.607 12.7877Z"
          fill="white" />
        <path
          d="M59.1548 9.61838L60.1845 10.0431L57.5655 16.3389L56.1745 15.7652L55.2154 9.57416L53.1576 14.5209L52.1369 14.0999L54.7559 7.80408L56.1379 8.37408L57.097 14.5651L59.1548 9.61838Z"
          fill="white" />
        <path
          d="M59.6485 17.7288L62.8966 12.8884L61.1895 11.7526L61.7436 10.927L66.0845 13.8151L65.5305 14.6407L63.8234 13.505L60.5752 18.3454L59.6485 17.7288Z"
          fill="white" />
        <path
          d="M71.4592 16.3117L69.9106 16.5732L69.4198 16.0845L70.5674 15.4237L71.4592 16.3117ZM65.8733 23.0164L66.6614 21.3643L64.7257 19.4369L63.0665 20.2216L62.2369 19.3956L68.9151 16.408L69.7032 17.1928L66.7029 23.8425L65.8733 23.0164ZM65.6797 18.9825L67.1177 20.4144L68.4243 17.6815L65.6797 18.9825Z"
          fill="white" />
        <path
          d="M68.1913 26.4237C67.0561 24.732 67.4635 22.7984 69.2682 21.5977C71.016 20.4348 72.9523 20.692 74.1418 22.4647C75.2445 24.1079 74.8042 25.7121 73.6311 26.68L72.9901 25.7248C73.7515 25.1246 74.0567 24.0551 73.3452 22.9947C72.563 21.8292 71.1773 21.7091 69.9091 22.5528C68.5678 23.4452 68.2764 24.8333 68.988 25.8937C69.6887 26.9379 70.8575 27.015 71.5513 26.6821L72.1922 27.6373C70.913 28.2542 69.2614 28.0183 68.1913 26.4237Z"
          fill="white" />
        <path
          d="M70.7479 30.8371L76.1493 28.6093L75.3636 26.7205L76.285 26.3405L78.2829 31.1433L77.3616 31.5233L76.5759 29.6346L71.1744 31.8624L70.7479 30.8371Z"
          fill="white" />
        <path
          d="M72.9737 38.6767L74.5507 37.739L74.0167 35.0655L72.1993 34.8002L71.9704 33.6544L79.19 34.8647L79.4074 35.9532L73.2025 39.8224L72.9737 38.6767ZM75.0634 35.2156L75.4601 37.2015L78.0713 35.6521L75.0634 35.2156Z"
          fill="white" />
        <path d="M80 44.3182V45.428H73.1562V43.9288L78.5335 40.6773H73.1562V39.5772H80V41.0667L74.6228 44.3182H80Z"
          fill="white" />
        <path
          d="M72.4003 48.3945C72.7722 46.5327 74.3221 45.3607 76.566 45.8051C78.8098 46.2495 79.7913 47.9229 79.4194 49.7848C79.0493 51.6371 77.4994 52.809 75.2556 52.3646C73.0118 51.9202 72.0302 50.2468 72.4003 48.3945ZM73.34 48.5806C73.1131 49.7665 73.7738 50.8999 75.4807 51.2379C77.1971 51.5779 78.2048 50.775 78.4605 49.5948C78.7181 48.4051 78.0573 47.2717 76.3409 46.9318C74.6341 46.5937 73.5688 47.3852 73.34 48.5806Z"
          fill="white" />
        <path
          d="M70.7542 53.8431C71.3939 52.3051 72.8116 51.5938 74.1746 52.0822L73.7294 53.1525C72.8669 52.86 72.006 53.3268 71.6393 54.2082C71.2577 55.1256 71.5534 55.8903 72.1224 56.125C72.7186 56.3709 73.2121 56.1003 73.7247 54.8681L73.8706 54.5173C74.3308 53.4111 75.3905 52.7207 76.4473 53.1565C77.4228 53.5589 78.0962 54.7639 77.4228 56.3828C76.7755 57.9388 75.4613 58.5032 74.1232 58.0566L74.5685 56.9863C75.4618 57.281 76.1768 56.8594 76.5285 56.014C76.9027 55.1146 76.6434 54.4913 76.0021 54.2268C75.4782 54.0107 75.0934 54.1471 74.5771 55.3883L74.4799 55.6221C73.9037 57.0072 72.7287 57.6185 71.6809 57.1863C70.7325 56.7951 70.0583 55.516 70.7542 53.8431Z"
          fill="white" />
        <path d="M62.4066 68.1637L62.928 68.9408L60.3267 70.6715L59.8053 69.8944L62.4066 68.1637Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_2123_1062">
          <rect width="86" height="86" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </button>

  <Transition>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <button @click="toggleModal" class="modal-close">
          <span class="close">&times;</span>
        </button>
        <picture class="modal-picture">
          <prismic-image :field="modalData.image" />
        </picture>
        <div class="modal-form">
          <div class="modal-select-wrapper">
            <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.63985 11.769L5.63985 12.9611L6.49025 12.1257L10.1132 8.56649C10.1528 8.52765 10.2161 8.52764 10.2557 8.56647C10.2963 8.60631 10.2963 8.67171 10.2557 8.71156L5.62829 13.2542C5.57934 13.2975 5.50596 13.2971 5.45797 13.255L0.83102 8.71277C0.79042 8.6729 0.79042 8.60746 0.83102 8.56759C0.87062 8.52874 0.93392 8.52875 0.97352 8.5676L4.59647 12.1252L5.44679 12.9602L5.44679 11.7684L5.44679 0.61606C5.44679 0.56275 5.49001 0.519531 5.54332 0.519531C5.59663 0.519531 5.63985 0.562749 5.63985 0.616059L5.63985 11.769Z"
                fill="#4278FA" />
              <path
                d="M0.83102 8.56759C0.79042 8.60746 0.79042 8.6729 0.83102 8.71277L5.45797 13.255C5.50596 13.2971 5.57934 13.2975 5.62829 13.2542L10.2557 8.71156C10.2963 8.67171 10.2963 8.60631 10.2557 8.56647C10.2161 8.52764 10.1528 8.52765 10.1132 8.56649L6.49025 12.1257L5.63985 12.9611L5.63985 11.769L5.63985 0.616059C5.63985 0.562749 5.59663 0.519531 5.54332 0.519531C5.49001 0.519531 5.44679 0.56275 5.44679 0.61606L5.44679 11.7684L5.44679 12.9602L4.59647 12.1252L0.97352 8.5676C0.93392 8.52875 0.87062 8.52874 0.83102 8.56759ZM0.83102 8.56759L0.48072 8.21079"
                stroke="#EDEBE3" />
            </svg>

            <select v-model="selectedForm" value="default" class="modal-select btn btn--dark">
              <option value="default" :selected="selectedForm === 'default'">Contact</option>
              <option value="pqrs">PQRS</option>
              <option value="support">Support</option>
              <option value="services">Services</option>
            </select>
          </div>

          <div v-if="selectedForm === 'default'" class="modal-default">
            <div class="modal-form-content">
              <h3>{{ modalData.headline }}</h3>
              <p>{{ modalData.description }}</p>
            </div>
            <form @submit.prevent="submitForm" class="modal-form-inputs">
              <input v-model="name" type="text" name="name" :placeholder="modalData.inputs[0].name" required></input>
              <input v-model="phone" type="text" name="phone" :placeholder="modalData.inputs[0].phone" required></input>
              <input v-model="email" type="email" name="email" :placeholder="modalData.inputs[0].email"
                required></input>
              <textarea v-model="message" :placeholder="modalData.inputs[0].message" name="message" required></textarea>
              <p v-if="messageSuccess">{{ messageSuccess }}</p>
              <button type="submit">{{ modalData.button_label }} <svg width="11" height="14" viewBox="0 0 14 12"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.7491 5.90347L12.9413 5.90347L12.1058 5.05307L8.54658 1.43009C8.50773 1.39055 8.50772 1.32718 8.54655 1.28763C8.58639 1.24704 8.65179 1.24704 8.69164 1.28763L13.2343 5.91503C13.2776 5.96398 13.2772 6.03736 13.2351 6.08535L8.69285 10.7123C8.65298 10.7529 8.58754 10.7529 8.54767 10.7123L8.19087 11.0626L8.54767 10.7123C8.50883 10.6727 8.50883 10.6094 8.54768 10.5698L12.1053 6.94685L12.9403 6.09653L11.7486 6.09653L0.596139 6.09653C0.542828 6.09653 0.49961 6.05331 0.49961 6C0.49961 5.94669 0.542827 5.90347 0.596138 5.90347L11.7491 5.90347Z"
                    fill="#4278FA" stroke="#EDEBE3" />
                </svg>
              </button>
            </form>
          </div>

          <div v-if="selectedForm === 'pqrs'" class="modal-default">
            <div class="modal-form-content">
              <h3>{{ modalData.headline }}</h3>
              <p>{{ modalData.description }}</p>
            </div>
            <form @submit.prevent="pqrsSubmitForm" class="modal-form-inputs">
              <input v-model="pqrsName" type="text" name="name" :placeholder="modalData.pqrs_inputs[0].name"
                required></input>
              <input v-model="pqrsEmail" type="email" name="email" :placeholder="modalData.pqrs_inputs[0].email"
                required></input>
              <input v-model="pqrsPhone" type="text" name="phone" :placeholder="modalData.pqrs_inputs[0].phone"
                required></input>
              <input v-model="pqrsIdCard" type="text" name="id_card" :placeholder="modalData.pqrs_inputs[0].id_card"
                required></input>
              <input v-model="pqrsAddress" type="text" name="city" :placeholder="modalData.pqrs_inputs[0].address"
                required></input>
              <input v-model="pqrsCity" type="text" name="city" :placeholder="modalData.pqrs_inputs[0].city"
                required></input>
              <input v-model="pqrsSalesPoint" type="text" name="sales_point"
                :placeholder="modalData.pqrs_inputs[0].sales_point"></input>
              <div class="input-select-wrapper">
                <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.63985 11.769L5.63985 12.9611L6.49025 12.1257L10.1132 8.56649C10.1528 8.52765 10.2161 8.52764 10.2557 8.56647C10.2963 8.60631 10.2963 8.67171 10.2557 8.71156L5.62829 13.2542C5.57934 13.2975 5.50596 13.2971 5.45797 13.255L0.83102 8.71277C0.79042 8.6729 0.79042 8.60746 0.83102 8.56759C0.87062 8.52874 0.93392 8.52875 0.97352 8.5676L4.59647 12.1252L5.44679 12.9602L5.44679 11.7684L5.44679 0.61606C5.44679 0.56275 5.49001 0.519531 5.54332 0.519531C5.59663 0.519531 5.63985 0.562749 5.63985 0.616059L5.63985 11.769Z"
                    fill="currentColor" />
                  <path
                    d="M0.83102 8.56759C0.79042 8.60746 0.79042 8.6729 0.83102 8.71277L5.45797 13.255C5.50596 13.2971 5.57934 13.2975 5.62829 13.2542L10.2557 8.71156C10.2963 8.67171 10.2963 8.60631 10.2557 8.56647C10.2161 8.52764 10.1528 8.52765 10.1132 8.56649L6.49025 12.1257L5.63985 12.9611L5.63985 11.769L5.63985 0.616059C5.63985 0.562749 5.59663 0.519531 5.54332 0.519531C5.49001 0.519531 5.44679 0.56275 5.44679 0.61606L5.44679 11.7684L5.44679 12.9602L4.59647 12.1252L0.97352 8.5676C0.93392 8.52875 0.87062 8.52874 0.83102 8.56759ZM0.83102 8.56759L0.48072 8.21079"
                    stroke="currentColor" />
                </svg>
                <select v-model="pqrsBrand">
                  <option disabled hidden>{{ modalData.pqrs_inputs[0].brand }}</option>
                  <option v-for="(brand, index) in modalData.pqrs_brands" :value="brand.brand">
                    {{ brand.brand }}
                  </option>
                </select>
              </div>


              <input v-model="pqrsProduct" type="text" name="product" :placeholder="modalData.pqrs_inputs[0].product"
                required></input>
              <input v-model="pqrsProblem" type="text" name="problem" :placeholder="modalData.pqrs_inputs[0].problem"
                required></input>
              <label for="lote">{{ modalData.pqrs_inputs[0].lote }}</label>
              <input @change="handleSubmitFile" type="file" id="lote" name="lote"
                :placeholder="modalData.pqrs_inputs[0].lote" required></input>
              <input v-model="pqrsProductCondition" type="text" name="product_condition"
                :placeholder="modalData.pqrs_inputs[0].product_condition" required></input>
              <div class="input-select-wrapper">
                <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.63985 11.769L5.63985 12.9611L6.49025 12.1257L10.1132 8.56649C10.1528 8.52765 10.2161 8.52764 10.2557 8.56647C10.2963 8.60631 10.2963 8.67171 10.2557 8.71156L5.62829 13.2542C5.57934 13.2975 5.50596 13.2971 5.45797 13.255L0.83102 8.71277C0.79042 8.6729 0.79042 8.60746 0.83102 8.56759C0.87062 8.52874 0.93392 8.52875 0.97352 8.5676L4.59647 12.1252L5.44679 12.9602L5.44679 11.7684L5.44679 0.61606C5.44679 0.56275 5.49001 0.519531 5.54332 0.519531C5.59663 0.519531 5.63985 0.562749 5.63985 0.616059L5.63985 11.769Z"
                    fill="currentColor" />
                  <path
                    d="M0.83102 8.56759C0.79042 8.60746 0.79042 8.6729 0.83102 8.71277L5.45797 13.255C5.50596 13.2971 5.57934 13.2975 5.62829 13.2542L10.2557 8.71156C10.2963 8.67171 10.2963 8.60631 10.2557 8.56647C10.2161 8.52764 10.1528 8.52765 10.1132 8.56649L6.49025 12.1257L5.63985 12.9611L5.63985 11.769L5.63985 0.616059C5.63985 0.562749 5.59663 0.519531 5.54332 0.519531C5.49001 0.519531 5.44679 0.56275 5.44679 0.61606L5.44679 11.7684L5.44679 12.9602L4.59647 12.1252L0.97352 8.5676C0.93392 8.52875 0.87062 8.52874 0.83102 8.56759ZM0.83102 8.56759L0.48072 8.21079"
                    stroke="currentColor" />
                </svg>
                <select v-model="pqrsRemain">
                  <option disabled hidden selected>{{ modalData.pqrs_inputs[0].remain }}</option>
                  <option value="yes">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>

              <input v-model="pqrsConsultor" type="text" name="consultor"
                :placeholder="modalData.pqrs_inputs[0].consultor"></input>
              <input v-model="pqrsConsultorPhone" type="text" name="consultor_phone"
                :placeholder="modalData.pqrs_inputs[0].consultor_phone"></input>
              <p v-if="messageSuccess">{{ messageSuccess }}</p>
              <button type="submit">{{ modalData.button_label }} <svg width="11" height="14" viewBox="0 0 14 12"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.7491 5.90347L12.9413 5.90347L12.1058 5.05307L8.54658 1.43009C8.50773 1.39055 8.50772 1.32718 8.54655 1.28763C8.58639 1.24704 8.65179 1.24704 8.69164 1.28763L13.2343 5.91503C13.2776 5.96398 13.2772 6.03736 13.2351 6.08535L8.69285 10.7123C8.65298 10.7529 8.58754 10.7529 8.54767 10.7123L8.19087 11.0626L8.54767 10.7123C8.50883 10.6727 8.50883 10.6094 8.54768 10.5698L12.1053 6.94685L12.9403 6.09653L11.7486 6.09653L0.596139 6.09653C0.542828 6.09653 0.49961 6.05331 0.49961 6C0.49961 5.94669 0.542827 5.90347 0.596138 5.90347L11.7491 5.90347Z"
                    fill="#4278FA" stroke="#EDEBE3" />
                </svg>
              </button>
            </form>
          </div>

          <div v-if="selectedForm === 'support'" class="modal-default">
            <div class="modal-form-content">
              <h3>{{ modalData.headline }}</h3>
              <p>{{ modalData.description }}</p>
            </div>
            <form @submit.prevent="submitForm" class="modal-form-inputs">
              <input v-model="supportName" type="text" name="name" :placeholder="modalData.support_inputs[0].name"
                required></input>
              <input v-model="supportPhone" type="text" name="phone" :placeholder="modalData.support_inputs[0].phone"
                required></input>
              <input v-model="supportEmail" type="email" name="email" :placeholder="modalData.support_inputs[0].email"
                required></input>
              <input v-model="supportSubject" type="text" name="subject"
                :placeholder="modalData.support_inputs[0].subject" required></input>
              <textarea v-model="supportMessage" :placeholder="modalData.support_inputs[0].mensaje" name="message"
                required></textarea>
              <p v-if="messageSuccess">{{ messageSuccess }}</p>
              <button type="submit">{{ modalData.button_label }} <svg width="11" height="14" viewBox="0 0 14 12"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.7491 5.90347L12.9413 5.90347L12.1058 5.05307L8.54658 1.43009C8.50773 1.39055 8.50772 1.32718 8.54655 1.28763C8.58639 1.24704 8.65179 1.24704 8.69164 1.28763L13.2343 5.91503C13.2776 5.96398 13.2772 6.03736 13.2351 6.08535L8.69285 10.7123C8.65298 10.7529 8.58754 10.7529 8.54767 10.7123L8.19087 11.0626L8.54767 10.7123C8.50883 10.6727 8.50883 10.6094 8.54768 10.5698L12.1053 6.94685L12.9403 6.09653L11.7486 6.09653L0.596139 6.09653C0.542828 6.09653 0.49961 6.05331 0.49961 6C0.49961 5.94669 0.542827 5.90347 0.596138 5.90347L11.7491 5.90347Z"
                    fill="#4278FA" stroke="#EDEBE3" />
                </svg>
              </button>
            </form>
          </div>

          <div v-if="selectedForm === 'services'" class="modal-default">
            <div class="modal-form-content">
              <h3>{{ modalData.headline }}</h3>
              <p>{{ modalData.description }}</p>
            </div>
            <form @submit.prevent="submitForm" class="modal-form-inputs">
              <input v-model="servicesName" type="text" name="name" :placeholder="modalData.services_inputs[0].name"
                required></input>
              <input v-model="servicesPhone" type="text" name="phone" :placeholder="modalData.services_inputs[0].phone"
                required></input>
              <input v-model="servicesEmail" type="email" name="email" :placeholder="modalData.services_inputs[0].email"
                required></input>
              <input v-model="servicesCity" type="text" name="city" :placeholder="modalData.services_inputs[0].city"
                required></input>
              <input v-model="servicesSubject" type="text" name="subject"
                :placeholder="modalData.services_inputs[0].subject" required></input>
              <textarea v-model="servicesMessage" :placeholder="modalData.services_inputs[0].message" name="message"
                required></textarea>
              <p v-if="messageSuccess">{{ messageSuccess }}</p>
              <button type="submit">{{ modalData.button_label }} <svg width="11" height="14" viewBox="0 0 14 12"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.7491 5.90347L12.9413 5.90347L12.1058 5.05307L8.54658 1.43009C8.50773 1.39055 8.50772 1.32718 8.54655 1.28763C8.58639 1.24704 8.65179 1.24704 8.69164 1.28763L13.2343 5.91503C13.2776 5.96398 13.2772 6.03736 13.2351 6.08535L8.69285 10.7123C8.65298 10.7529 8.58754 10.7529 8.54767 10.7123L8.19087 11.0626L8.54767 10.7123C8.50883 10.6727 8.50883 10.6094 8.54768 10.5698L12.1053 6.94685L12.9403 6.09653L11.7486 6.09653L0.596139 6.09653C0.542828 6.09653 0.49961 6.05331 0.49961 6C0.49961 5.94669 0.542827 5.90347 0.596138 5.90347L11.7491 5.90347Z"
                    fill="#4278FA" stroke="#EDEBE3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import axios from "axios";

const showModal = ref(false)

function toggleModal() {
  showModal.value = !showModal.value
}

const selectedForm = ref('default')

const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

const { data } = await useAsyncData("[modal]", () =>
  client.getSingle("modal", { lang: iso })
);

const modalData = data.value.data;

const name = ref(null)
const email = ref(null)
const phone = ref(null)
const message = ref(null)
const messageSuccess = ref(null)

function submitForm(e) {
  e.preventDefault();
  let data = {
    name: name.value,
    email: email.value,
    message: message.value
  };
  axios
    .post("https://getform.io/f/anlexmea", data, {
      headers: {
        Accept: "application/x-www-form-urlencoded",
      }
    })
    .then(
      response => {
        if (response.status === 200) {
          messageSuccess.value = 'Se ha enviado tu información correctamente'
          e.target.reset()
        } else {
          console.error('No se pudo enviar tu formulario')
        }
      },
    );
}

const pqrsName = ref(null)
const pqrsEmail = ref(null)
const pqrsPhone = ref(null)
const pqrsIdCard = ref(null)
const pqrsCity = ref(null)
const pqrsAddress = ref(null)
const pqrsSalesPoint = ref(null)
const pqrsBrand = modalData.pqrs_inputs[0].brand
const pqrsProduct = ref(null)
const pqrsProblem = ref(null)
const pqrsLote = ref(null)
const pqrsProductCondition = ref(null)
const pqrsRemain = modalData.pqrs_inputs[0].remain
const pqrsConsultor = ref(null)
const pqrsConsultorPhone = ref(null)

function handleSubmitFile(e) {
  pqrsLote.value = e.target.files[0]
}

function pqrsSubmitForm(e) {
  e.preventDefault();
  let data = {
    access_key: '68a397df-297d-4bf1-9fc6-51be330cc879',
    name: pqrsName.value,
    email: pqrsEmail.value,
    phone: pqrsPhone.value,
    id_card: pqrsIdCard.value,
    city: pqrsCity.value,
    address: pqrsAddress.value,
    sales_point: pqrsSalesPoint.value,
    brand: pqrsBrand.value,
    product: pqrsProduct.value,
    problem: pqrsProblem.value,
    lote: pqrsLote.value,
    product_condition: pqrsProductCondition.value,
    remain: pqrsRemain.value,
    consultor: pqrsConsultor.value,
    consultor_phone: pqrsConsultorPhone.value
  };

  axios
    .post("https://api.web3forms.com/submit", data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(
      response => {
        console.log(response)
        if (response.status === 200) {
          messageSuccess.value = 'Se ha enviado tu información correctamente'
          e.target.reset()
        } else {
          console.error(response)
        }
      },
    );
}

const servicesName = ref(null)
const servicesEmail = ref(null)
const servicesPhone = ref(null)
const servicesSubject = ref(null)
const servicesMessage = ref(null)

function servicesSubmitForm(e) {
  e.preventDefault();
  let data = {
    name: servicesName.value,
    email: servicesEmail.value,
    phone: servicesPhone.value,
    subject: servicesSubject.value,
    message: servicesMessage.value
  };

  axios
    .post("https://api.web3forms.com/submit", data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(
      response => {
        console.log(response)
        if (response.status === 200) {
          messageSuccess.value = 'Se ha enviado tu información correctamente'
          e.target.reset()
        } else {
          console.error(response)
        }
      },
    );
}

const supportName = ref(null)
const supportEmail = ref(null)
const supportPhone = ref(null)
const supportSubject = ref(null)
const supportMessage = ref(null)

function supportSubmitForm(e) {
  e.preventDefault();
  let data = {
    name: supportName.value,
    email: supportEmail.value,
    phone: supportPhone.value,
    subject: supportSubject.value,
    message: supportMessage.value
  };

  axios
    .post("https://api.web3forms.com/submit", data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(
      response => {
        console.log(response)
        if (response.status === 200) {
          messageSuccess.value = 'Se ha enviado tu información correctamente'
          e.target.reset()
        } else {
          console.error(response)
        }
      },
    );
}

</script>

<style lang="scss" scoped>
@import "@scss/components/contact-modal";
@import "@scss/components/button";
</style>