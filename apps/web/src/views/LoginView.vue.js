import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { api, errorMessage } from '../api';
import { login } from '../auth';
const email = ref('admin@chevymania.local'), password = ref('ChangeMe123!'), loading = ref(false), error = ref('');
const router = useRouter();
async function submit() { loading.value = true; error.value = ''; try {
    const { data } = await api.post('/auth/login', { email: email.value, password: password.value });
    login(data.token, data.user);
    router.push('/');
}
catch (e) {
    error.value = errorMessage(e);
}
finally {
    loading.value = false;
} }
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    justify: "center",
}));
const __VLS_2 = __VLS_1({
    justify: "center",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    cols: "12",
    sm: "8",
    md: "5",
}));
const __VLS_7 = __VLS_6({
    cols: "12",
    sm: "8",
    md: "5",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    title: "Acceso a Chevymania",
    ...{ class: "mt-12" },
}));
const __VLS_11 = __VLS_10({
    title: "Acceso a Chevymania",
    ...{ class: "mt-12" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
const __VLS_13 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
if (__VLS_ctx.error) {
    const __VLS_17 = {}.VAlert;
    /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
        type: "error",
        ...{ class: "mb-4" },
    }));
    const __VLS_19 = __VLS_18({
        type: "error",
        ...{ class: "mb-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    __VLS_20.slots.default;
    (__VLS_ctx.error);
    var __VLS_20;
}
const __VLS_21 = {}.VForm;
/** @type {[typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    ...{ 'onSubmit': {} },
}));
const __VLS_23 = __VLS_22({
    ...{ 'onSubmit': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_25;
let __VLS_26;
let __VLS_27;
const __VLS_28 = {
    onSubmit: (__VLS_ctx.submit)
};
__VLS_24.slots.default;
const __VLS_29 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    modelValue: (__VLS_ctx.email),
    label: "Correo",
    type: "email",
    rules: ([v => !!v || 'Requerido']),
}));
const __VLS_31 = __VLS_30({
    modelValue: (__VLS_ctx.email),
    label: "Correo",
    type: "email",
    rules: ([v => !!v || 'Requerido']),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_33 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    modelValue: (__VLS_ctx.password),
    label: "Contraseña",
    type: "password",
    rules: ([v => v.length >= 8 || 'Mínimo 8 caracteres']),
}));
const __VLS_35 = __VLS_34({
    modelValue: (__VLS_ctx.password),
    label: "Contraseña",
    type: "password",
    rules: ([v => v.length >= 8 || 'Mínimo 8 caracteres']),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const __VLS_37 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    type: "submit",
    color: "primary",
    block: true,
    loading: (__VLS_ctx.loading),
}));
const __VLS_39 = __VLS_38({
    type: "submit",
    color: "primary",
    block: true,
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
__VLS_40.slots.default;
var __VLS_40;
var __VLS_24;
var __VLS_16;
var __VLS_12;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['mt-12']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            email: email,
            password: password,
            loading: loading,
            error: error,
            submit: submit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
