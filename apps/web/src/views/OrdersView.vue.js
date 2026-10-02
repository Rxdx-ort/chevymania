import { computed, onMounted, ref } from 'vue';
import { api, errorMessage } from '../api';
import { auth } from '../auth';
const orders = ref([]), vehicles = ref([]), error = ref(''), dialog = ref(false), editor = ref(null), newOrder = ref({ vehicleId: '', complaint: '' });
const staff = computed(() => auth.user?.role !== 'CUSTOMER');
const statuses = ['RECEIVED', 'DIAGNOSIS', 'PENDING_AUTHORIZATION', 'AUTHORIZED', 'PENDING_PARTS', 'IN_REPAIR', 'PENDING_VALIDATION', 'READY_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'];
async function load() { try {
    orders.value = (await api.get('/orders')).data;
    if (staff.value)
        vehicles.value = (await api.get('/vehicles')).data;
}
catch (e) {
    error.value = errorMessage(e);
} }
onMounted(load);
async function create() { try {
    await api.post('/orders', newOrder.value);
    dialog.value = false;
    newOrder.value = { vehicleId: '', complaint: '' };
    await load();
}
catch (e) {
    error.value = errorMessage(e);
} }
async function save() { if (!editor.value)
    return; try {
    await api.patch(`/orders/${editor.value._id}`, { status: editor.value.status, diagnosis: editor.value.diagnosis, quote: editor.value.quote, authorizationStatus: editor.value.authorization.status });
    editor.value = null;
    await load();
}
catch (e) {
    error.value = errorMessage(e);
} }
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex align-center mb-5" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-h4" },
});
(__VLS_ctx.staff ? 'Órdenes de reparación' : 'Mis órdenes');
const __VLS_0 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
if (__VLS_ctx.staff) {
    const __VLS_4 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        ...{ 'onClick': {} },
        color: "primary",
    }));
    const __VLS_6 = __VLS_5({
        ...{ 'onClick': {} },
        color: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_8;
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = {
        onClick: (...[$event]) => {
            if (!(__VLS_ctx.staff))
                return;
            __VLS_ctx.dialog = true;
        }
    };
    __VLS_7.slots.default;
    var __VLS_7;
}
if (__VLS_ctx.error) {
    const __VLS_12 = {}.VAlert;
    /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ 'onClick:close': {} },
        type: "error",
        closable: true,
    }));
    const __VLS_14 = __VLS_13({
        ...{ 'onClick:close': {} },
        type: "error",
        closable: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_16;
    let __VLS_17;
    let __VLS_18;
    const __VLS_19 = {
        'onClick:close': (...[$event]) => {
            if (!(__VLS_ctx.error))
                return;
            __VLS_ctx.error = '';
        }
    };
    __VLS_15.slots.default;
    (__VLS_ctx.error);
    var __VLS_15;
}
const __VLS_20 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
const __VLS_24 = {}.VTable;
/** @type {[typeof __VLS_components.VTable, typeof __VLS_components.vTable, typeof __VLS_components.VTable, typeof __VLS_components.vTable, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
if (__VLS_ctx.staff) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
for (const [order] of __VLS_getVForSourceType((__VLS_ctx.orders))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
        key: (order._id),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    (order.folio);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    (order.vehicleId ? `${order.vehicleId.plate} · ${order.vehicleId.brand} ${order.vehicleId.model}` : '—');
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    (order.complaint);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    const __VLS_28 = {}.VChip;
    /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
        size: "small",
        color: "primary",
    }));
    const __VLS_30 = __VLS_29({
        size: "small",
        color: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    __VLS_31.slots.default;
    (order.status);
    var __VLS_31;
    if (__VLS_ctx.staff) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        const __VLS_32 = {}.VBtn;
        /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
        // @ts-ignore
        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
            ...{ 'onClick': {} },
            size: "small",
            variant: "text",
        }));
        const __VLS_34 = __VLS_33({
            ...{ 'onClick': {} },
            size: "small",
            variant: "text",
        }, ...__VLS_functionalComponentArgsRest(__VLS_33));
        let __VLS_36;
        let __VLS_37;
        let __VLS_38;
        const __VLS_39 = {
            onClick: (...[$event]) => {
                if (!(__VLS_ctx.staff))
                    return;
                __VLS_ctx.editor = JSON.parse(JSON.stringify(order));
            }
        };
        __VLS_35.slots.default;
        var __VLS_35;
    }
}
var __VLS_27;
var __VLS_23;
const __VLS_40 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "550",
}));
const __VLS_42 = __VLS_41({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "550",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
const __VLS_44 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    title: "Nueva orden",
}));
const __VLS_46 = __VLS_45({
    title: "Nueva orden",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
const __VLS_48 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
const __VLS_52 = {}.VSelect;
/** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    modelValue: (__VLS_ctx.newOrder.vehicleId),
    items: (__VLS_ctx.vehicles),
    itemValue: "_id",
    itemTitle: (v => `${v.plate} · ${v.brand} ${v.model}`),
    label: "Vehículo",
}));
const __VLS_54 = __VLS_53({
    modelValue: (__VLS_ctx.newOrder.vehicleId),
    items: (__VLS_ctx.vehicles),
    itemValue: "_id",
    itemTitle: (v => `${v.plate} · ${v.brand} ${v.model}`),
    label: "Vehículo",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_56 = {}.VTextarea;
/** @type {[typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    modelValue: (__VLS_ctx.newOrder.complaint),
    label: "Motivo de ingreso",
}));
const __VLS_58 = __VLS_57({
    modelValue: (__VLS_ctx.newOrder.complaint),
    label: "Motivo de ingreso",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
var __VLS_51;
const __VLS_60 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
const __VLS_64 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({}));
const __VLS_66 = __VLS_65({}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_68 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    ...{ 'onClick': {} },
}));
const __VLS_70 = __VLS_69({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
let __VLS_72;
let __VLS_73;
let __VLS_74;
const __VLS_75 = {
    onClick: (...[$event]) => {
        __VLS_ctx.dialog = false;
    }
};
__VLS_71.slots.default;
var __VLS_71;
const __VLS_76 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    ...{ 'onClick': {} },
    color: "primary",
}));
const __VLS_78 = __VLS_77({
    ...{ 'onClick': {} },
    color: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
let __VLS_80;
let __VLS_81;
let __VLS_82;
const __VLS_83 = {
    onClick: (__VLS_ctx.create)
};
__VLS_79.slots.default;
var __VLS_79;
var __VLS_63;
var __VLS_47;
var __VLS_43;
const __VLS_84 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (!!__VLS_ctx.editor),
    maxWidth: "600",
}));
const __VLS_86 = __VLS_85({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (!!__VLS_ctx.editor),
    maxWidth: "600",
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
let __VLS_88;
let __VLS_89;
let __VLS_90;
const __VLS_91 = {
    'onUpdate:modelValue': (v => !v && (__VLS_ctx.editor = null))
};
__VLS_87.slots.default;
if (__VLS_ctx.editor) {
    const __VLS_92 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
        title: "Actualizar orden",
    }));
    const __VLS_94 = __VLS_93({
        title: "Actualizar orden",
    }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    __VLS_95.slots.default;
    const __VLS_96 = {}.VCardText;
    /** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
    const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
    __VLS_99.slots.default;
    const __VLS_100 = {}.VSelect;
    /** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
        modelValue: (__VLS_ctx.editor.status),
        items: (__VLS_ctx.statuses),
        label: "Estado",
    }));
    const __VLS_102 = __VLS_101({
        modelValue: (__VLS_ctx.editor.status),
        items: (__VLS_ctx.statuses),
        label: "Estado",
    }, ...__VLS_functionalComponentArgsRest(__VLS_101));
    const __VLS_104 = {}.VTextarea;
    /** @type {[typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ]} */ ;
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
        modelValue: (__VLS_ctx.editor.diagnosis),
        label: "Diagnóstico",
    }));
    const __VLS_106 = __VLS_105({
        modelValue: (__VLS_ctx.editor.diagnosis),
        label: "Diagnóstico",
    }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    const __VLS_108 = {}.VTextField;
    /** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
        modelValue: (__VLS_ctx.editor.quote),
        modelModifiers: { number: true, },
        label: "Presupuesto",
        type: "number",
    }));
    const __VLS_110 = __VLS_109({
        modelValue: (__VLS_ctx.editor.quote),
        modelModifiers: { number: true, },
        label: "Presupuesto",
        type: "number",
    }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    const __VLS_112 = {}.VSelect;
    /** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({
        modelValue: (__VLS_ctx.editor.authorization.status),
        items: (['NOT_REQUESTED', 'PENDING', 'APPROVED', 'REJECTED']),
        label: "Autorización",
    }));
    const __VLS_114 = __VLS_113({
        modelValue: (__VLS_ctx.editor.authorization.status),
        items: (['NOT_REQUESTED', 'PENDING', 'APPROVED', 'REJECTED']),
        label: "Autorización",
    }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    var __VLS_99;
    const __VLS_116 = {}.VCardActions;
    /** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({}));
    const __VLS_118 = __VLS_117({}, ...__VLS_functionalComponentArgsRest(__VLS_117));
    __VLS_119.slots.default;
    const __VLS_120 = {}.VSpacer;
    /** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({}));
    const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
    const __VLS_124 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({
        ...{ 'onClick': {} },
    }));
    const __VLS_126 = __VLS_125({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_125));
    let __VLS_128;
    let __VLS_129;
    let __VLS_130;
    const __VLS_131 = {
        onClick: (...[$event]) => {
            if (!(__VLS_ctx.editor))
                return;
            __VLS_ctx.editor = null;
        }
    };
    __VLS_127.slots.default;
    var __VLS_127;
    const __VLS_132 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({
        ...{ 'onClick': {} },
        color: "primary",
    }));
    const __VLS_134 = __VLS_133({
        ...{ 'onClick': {} },
        color: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    let __VLS_136;
    let __VLS_137;
    let __VLS_138;
    const __VLS_139 = {
        onClick: (__VLS_ctx.save)
    };
    __VLS_135.slots.default;
    var __VLS_135;
    var __VLS_119;
    var __VLS_95;
}
var __VLS_87;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            orders: orders,
            vehicles: vehicles,
            error: error,
            dialog: dialog,
            editor: editor,
            newOrder: newOrder,
            staff: staff,
            statuses: statuses,
            create: create,
            save: save,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
