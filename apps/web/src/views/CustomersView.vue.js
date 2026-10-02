import { onMounted, ref } from 'vue';
import { api, errorMessage } from '../api';
const customers = ref([]), vehicles = ref([]), error = ref(''), saved = ref('');
const customerDialog = ref(false), vehicleDialog = ref(false);
const customer = ref({ name: '', email: '', phone: '' }), vehicle = ref({ customerId: '', plate: '', brand: '', model: '', year: new Date().getFullYear(), vin: '', color: '' });
async function load() { try {
    [customers.value, vehicles.value] = (await Promise.all([api.get('/customers'), api.get('/vehicles')])).map(r => r.data);
}
catch (e) {
    error.value = errorMessage(e);
} }
onMounted(load);
async function saveCustomer() { try {
    await api.post('/customers', customer.value);
    customerDialog.value = false;
    customer.value = { name: '', email: '', phone: '' };
    saved.value = 'Cliente creado';
    await load();
}
catch (e) {
    error.value = errorMessage(e);
} }
async function saveVehicle() { try {
    await api.post('/vehicles', vehicle.value);
    vehicleDialog.value = false;
    saved.value = 'Vehículo registrado';
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
const __VLS_0 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_4 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ 'onClick': {} },
    color: "primary",
    ...{ class: "mr-2" },
}));
const __VLS_6 = __VLS_5({
    ...{ 'onClick': {} },
    color: "primary",
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_8;
let __VLS_9;
let __VLS_10;
const __VLS_11 = {
    onClick: (...[$event]) => {
        __VLS_ctx.customerDialog = true;
    }
};
__VLS_7.slots.default;
var __VLS_7;
const __VLS_12 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ 'onClick': {} },
    color: "secondary",
}));
const __VLS_14 = __VLS_13({
    ...{ 'onClick': {} },
    color: "secondary",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_16;
let __VLS_17;
let __VLS_18;
const __VLS_19 = {
    onClick: (...[$event]) => {
        __VLS_ctx.vehicleDialog = true;
    }
};
__VLS_15.slots.default;
var __VLS_15;
if (__VLS_ctx.error) {
    const __VLS_20 = {}.VAlert;
    /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        ...{ 'onClick:close': {} },
        type: "error",
        closable: true,
    }));
    const __VLS_22 = __VLS_21({
        ...{ 'onClick:close': {} },
        type: "error",
        closable: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    let __VLS_24;
    let __VLS_25;
    let __VLS_26;
    const __VLS_27 = {
        'onClick:close': (...[$event]) => {
            if (!(__VLS_ctx.error))
                return;
            __VLS_ctx.error = '';
        }
    };
    __VLS_23.slots.default;
    (__VLS_ctx.error);
    var __VLS_23;
}
if (__VLS_ctx.saved) {
    const __VLS_28 = {}.VAlert;
    /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
        ...{ 'onClick:close': {} },
        type: "success",
        closable: true,
    }));
    const __VLS_30 = __VLS_29({
        ...{ 'onClick:close': {} },
        type: "success",
        closable: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    let __VLS_32;
    let __VLS_33;
    let __VLS_34;
    const __VLS_35 = {
        'onClick:close': (...[$event]) => {
            if (!(__VLS_ctx.saved))
                return;
            __VLS_ctx.saved = '';
        }
    };
    __VLS_31.slots.default;
    (__VLS_ctx.saved);
    var __VLS_31;
}
const __VLS_36 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    ...{ class: "mt-2" },
}));
const __VLS_38 = __VLS_37({
    ...{ class: "mt-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
const __VLS_40 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    cols: "12",
    md: "5",
}));
const __VLS_42 = __VLS_41({
    cols: "12",
    md: "5",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
const __VLS_44 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    title: "Clientes",
}));
const __VLS_46 = __VLS_45({
    title: "Clientes",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
const __VLS_48 = {}.VList;
/** @type {[typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
for (const [c] of __VLS_getVForSourceType((__VLS_ctx.customers))) {
    const __VLS_52 = {}.VListItem;
    /** @type {[typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ]} */ ;
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
        key: (c._id),
        title: (c.name),
        subtitle: (`${c.email} · ${c.phone}`),
    }));
    const __VLS_54 = __VLS_53({
        key: (c._id),
        title: (c.name),
        subtitle: (`${c.email} · ${c.phone}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_53));
}
var __VLS_51;
var __VLS_47;
var __VLS_43;
const __VLS_56 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    cols: "12",
    md: "7",
}));
const __VLS_58 = __VLS_57({
    cols: "12",
    md: "7",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
const __VLS_60 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    title: "Vehículos",
}));
const __VLS_62 = __VLS_61({
    title: "Vehículos",
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
const __VLS_64 = {}.VTable;
/** @type {[typeof __VLS_components.VTable, typeof __VLS_components.vTable, typeof __VLS_components.VTable, typeof __VLS_components.vTable, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({}));
const __VLS_66 = __VLS_65({}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_67.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
for (const [v] of __VLS_getVForSourceType((__VLS_ctx.vehicles))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
        key: (v._id),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    (v.plate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    (v.brand);
    (v.model);
    (v.year);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    (v.customerId?.name || '—');
}
var __VLS_67;
var __VLS_63;
var __VLS_59;
var __VLS_39;
const __VLS_68 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    modelValue: (__VLS_ctx.customerDialog),
    maxWidth: "500",
}));
const __VLS_70 = __VLS_69({
    modelValue: (__VLS_ctx.customerDialog),
    maxWidth: "500",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_71.slots.default;
const __VLS_72 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    title: "Nuevo cliente",
}));
const __VLS_74 = __VLS_73({
    title: "Nuevo cliente",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
__VLS_75.slots.default;
const __VLS_76 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({}));
const __VLS_78 = __VLS_77({}, ...__VLS_functionalComponentArgsRest(__VLS_77));
__VLS_79.slots.default;
const __VLS_80 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    modelValue: (__VLS_ctx.customer.name),
    label: "Nombre",
}));
const __VLS_82 = __VLS_81({
    modelValue: (__VLS_ctx.customer.name),
    label: "Nombre",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
const __VLS_84 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    modelValue: (__VLS_ctx.customer.email),
    label: "Correo",
}));
const __VLS_86 = __VLS_85({
    modelValue: (__VLS_ctx.customer.email),
    label: "Correo",
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
const __VLS_88 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
    modelValue: (__VLS_ctx.customer.phone),
    label: "Teléfono",
}));
const __VLS_90 = __VLS_89({
    modelValue: (__VLS_ctx.customer.phone),
    label: "Teléfono",
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
var __VLS_79;
const __VLS_92 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
__VLS_95.slots.default;
const __VLS_96 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
const __VLS_100 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
    ...{ 'onClick': {} },
}));
const __VLS_102 = __VLS_101({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_101));
let __VLS_104;
let __VLS_105;
let __VLS_106;
const __VLS_107 = {
    onClick: (...[$event]) => {
        __VLS_ctx.customerDialog = false;
    }
};
__VLS_103.slots.default;
var __VLS_103;
const __VLS_108 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
    ...{ 'onClick': {} },
    color: "primary",
}));
const __VLS_110 = __VLS_109({
    ...{ 'onClick': {} },
    color: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_109));
let __VLS_112;
let __VLS_113;
let __VLS_114;
const __VLS_115 = {
    onClick: (__VLS_ctx.saveCustomer)
};
__VLS_111.slots.default;
var __VLS_111;
var __VLS_95;
var __VLS_75;
var __VLS_71;
const __VLS_116 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
    modelValue: (__VLS_ctx.vehicleDialog),
    maxWidth: "550",
}));
const __VLS_118 = __VLS_117({
    modelValue: (__VLS_ctx.vehicleDialog),
    maxWidth: "550",
}, ...__VLS_functionalComponentArgsRest(__VLS_117));
__VLS_119.slots.default;
const __VLS_120 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
    title: "Nuevo vehículo",
}));
const __VLS_122 = __VLS_121({
    title: "Nuevo vehículo",
}, ...__VLS_functionalComponentArgsRest(__VLS_121));
__VLS_123.slots.default;
const __VLS_124 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({}));
const __VLS_126 = __VLS_125({}, ...__VLS_functionalComponentArgsRest(__VLS_125));
__VLS_127.slots.default;
const __VLS_128 = {}.VSelect;
/** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
// @ts-ignore
const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({
    modelValue: (__VLS_ctx.vehicle.customerId),
    label: "Cliente",
    items: (__VLS_ctx.customers),
    itemTitle: "name",
    itemValue: "_id",
}));
const __VLS_130 = __VLS_129({
    modelValue: (__VLS_ctx.vehicle.customerId),
    label: "Cliente",
    items: (__VLS_ctx.customers),
    itemTitle: "name",
    itemValue: "_id",
}, ...__VLS_functionalComponentArgsRest(__VLS_129));
const __VLS_132 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({
    modelValue: (__VLS_ctx.vehicle.plate),
    label: "Placa",
}));
const __VLS_134 = __VLS_133({
    modelValue: (__VLS_ctx.vehicle.plate),
    label: "Placa",
}, ...__VLS_functionalComponentArgsRest(__VLS_133));
const __VLS_136 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({}));
const __VLS_138 = __VLS_137({}, ...__VLS_functionalComponentArgsRest(__VLS_137));
__VLS_139.slots.default;
const __VLS_140 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({}));
const __VLS_142 = __VLS_141({}, ...__VLS_functionalComponentArgsRest(__VLS_141));
__VLS_143.slots.default;
const __VLS_144 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({
    modelValue: (__VLS_ctx.vehicle.brand),
    label: "Marca",
}));
const __VLS_146 = __VLS_145({
    modelValue: (__VLS_ctx.vehicle.brand),
    label: "Marca",
}, ...__VLS_functionalComponentArgsRest(__VLS_145));
var __VLS_143;
const __VLS_148 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({}));
const __VLS_150 = __VLS_149({}, ...__VLS_functionalComponentArgsRest(__VLS_149));
__VLS_151.slots.default;
const __VLS_152 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({
    modelValue: (__VLS_ctx.vehicle.model),
    label: "Modelo",
}));
const __VLS_154 = __VLS_153({
    modelValue: (__VLS_ctx.vehicle.model),
    label: "Modelo",
}, ...__VLS_functionalComponentArgsRest(__VLS_153));
var __VLS_151;
var __VLS_139;
const __VLS_156 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({
    modelValue: (__VLS_ctx.vehicle.year),
    modelModifiers: { number: true, },
    label: "Año",
    type: "number",
}));
const __VLS_158 = __VLS_157({
    modelValue: (__VLS_ctx.vehicle.year),
    modelModifiers: { number: true, },
    label: "Año",
    type: "number",
}, ...__VLS_functionalComponentArgsRest(__VLS_157));
var __VLS_127;
const __VLS_160 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({}));
const __VLS_162 = __VLS_161({}, ...__VLS_functionalComponentArgsRest(__VLS_161));
__VLS_163.slots.default;
const __VLS_164 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({}));
const __VLS_166 = __VLS_165({}, ...__VLS_functionalComponentArgsRest(__VLS_165));
const __VLS_168 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({
    ...{ 'onClick': {} },
}));
const __VLS_170 = __VLS_169({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_169));
let __VLS_172;
let __VLS_173;
let __VLS_174;
const __VLS_175 = {
    onClick: (...[$event]) => {
        __VLS_ctx.vehicleDialog = false;
    }
};
__VLS_171.slots.default;
var __VLS_171;
const __VLS_176 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({
    ...{ 'onClick': {} },
    color: "primary",
}));
const __VLS_178 = __VLS_177({
    ...{ 'onClick': {} },
    color: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_177));
let __VLS_180;
let __VLS_181;
let __VLS_182;
const __VLS_183 = {
    onClick: (__VLS_ctx.saveVehicle)
};
__VLS_179.slots.default;
var __VLS_179;
var __VLS_163;
var __VLS_123;
var __VLS_119;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            customers: customers,
            vehicles: vehicles,
            error: error,
            saved: saved,
            customerDialog: customerDialog,
            vehicleDialog: vehicleDialog,
            customer: customer,
            vehicle: vehicle,
            saveCustomer: saveCustomer,
            saveVehicle: saveVehicle,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
