(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/config/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// API Configuration
__turbopack_context__.s({
    "API_CONFIG": ()=>API_CONFIG,
    "ensureApiPrefix": ()=>ensureApiPrefix,
    "getApiUrl": ()=>getApiUrl
});
const API_CONFIG = {
    // Update this URL to match your backend server
    BASE_URL: "https://lissnify-v2.onrender.com",
    // API Endpoints
    ENDPOINTS: {
        // Auth endpoints
        REGISTER: "/api/register/",
        LOGIN: "/api/login/",
        LOGOUT: "/api/logout/",
        VERIFY_OTP: "/api/verify-otp/",
        FORGOT_PASSWORD: "/api/forgot-password/",
        // User endpoints
        USER_PROFILE: "/api/user-profile/",
        LISTENER_PROFILE: "/api/listener-profile/",
        // Category endpoints
        CATEGORIES: "/api/categories/",
        // Community endpoints
        COMMUNITY_POSTS: "/api/community-posts/",
        COMMUNITY_POST_DETAIL: "/api/community-posts/",
        COMMUNITY_POST_LIKE: "/api/community-posts/",
        COMMUNITY_POST_COMMENTS: "/api/community-posts/",
        // Connection endpoints
        CONNECTIONS: "/api/connections/",
        CONNECTION_REQUEST: "/api/connection-request/",
        ACCEPT_CONNECTION: "/api/accept-connection/",
        LISTENERS_BOP: "/api/listeners-bop/",
        ACCEPTED_LIST_SEEKER: "/api/accepted-list-seeker/",
        GET_CONNECTION_LIST: "/api/get-connection-list/",
        // Blog endpoints
        BLOGS: "/api/blogs/",
        BLOG_DETAIL: "/api/blogs/",
        BLOG_LIKE: "/api/blogs/",
        BLOG_TOGGLE_LIKE: "/api/blogs/",
        BLOG_LIKES: "/api/blogs/",
        // Notification endpoints
        NOTIFICATIONS: "/api/notifications/",
        NOTIFICATION_DETAIL: "/api/notifications/",
        NOTIFICATION_MARK_ALL_READ: "/api/notifications/mark-all-read/",
        NOTIFICATION_STATS: "/api/notifications/stats/",
        NOTIFICATION_SETTINGS: "/api/notifications/settings/",
        CREATE_MESSAGE_NOTIFICATION: "/api/notifications/create-message/",
        TEST_NOTIFICATION: "/api/notifications/test/",
        // Testimonial endpoints
        TESTIMONIALS: "/api/testimonials/",
        TESTIMONIAL_DETAIL: "/api/testimonials/"
    }
};
const getApiUrl = (endpoint)=>{
    return "".concat(API_CONFIG.BASE_URL).concat(endpoint);
};
const ensureApiPrefix = (url)=>{
    if (url.endsWith('/api')) {
        return url;
    }
    return "".concat(url, "/api");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "acceptConnection": ()=>acceptConnection,
    "apiCall": ()=>apiCall,
    "connectedListeners": ()=>connectedListeners,
    "connection": ()=>connection,
    "connectionList": ()=>connectionList,
    "createTestimonial": ()=>createTestimonial,
    "deleteTestimonial": ()=>deleteTestimonial,
    "getBlogBySlug": ()=>getBlogBySlug,
    "getBlogLikes": ()=>getBlogLikes,
    "getBlogs": ()=>getBlogs,
    "getCategories": ()=>getCategories,
    "getDashboardUrl": ()=>getDashboardUrl,
    "getListenerRatingStats": ()=>getListenerRatingStats,
    "getListenerRatings": ()=>getListenerRatings,
    "getMessages": ()=>getMessages,
    "getRooms": ()=>getRooms,
    "getTestimonialById": ()=>getTestimonialById,
    "getTestimonials": ()=>getTestimonials,
    "getUnreadCounts": ()=>getUnreadCounts,
    "getUserProfile": ()=>getUserProfile,
    "isListenerConnected": ()=>isListenerConnected,
    "isValidUserType": ()=>isValidUserType,
    "likeBlog": ()=>likeBlog,
    "listener": ()=>listener,
    "listenerCarouselData": ()=>listenerCarouselData,
    "listenerCategoryWise": ()=>listenerCategoryWise,
    "listenerList": ()=>listenerList,
    "loginUser": ()=>loginUser,
    "markMessagesAsRead": ()=>markMessagesAsRead,
    "registerUser": ()=>registerUser,
    "sendOTP": ()=>sendOTP,
    "startDirectChat": ()=>startDirectChat,
    "submitRatingFeedback": ()=>submitRatingFeedback,
    "toggleBlogLike": ()=>toggleBlogLike,
    "unlikeBlog": ()=>unlikeBlog,
    "updateTestimonial": ()=>updateTestimonial,
    "updateUserProfile": ()=>updateUserProfile,
    "verifyOTP": ()=>verifyOTP
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
const apiCall = async function(endpoint) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    try {
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(endpoint);
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        const data = await response.json();
        if (!response.ok) {
            return {
                success: false,
                error: data.message || data.error || "HTTP ".concat(response.status),
                data: data
            };
        }
        return {
            success: true,
            data: data,
            message: data.message
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Network error occurred'
        };
    }
};
const registerUser = async (userData)=>{
    return apiCall('/api/register/', {
        method: 'POST',
        body: JSON.stringify(userData)
    });
};
const loginUser = async (credentials)=>{
    return apiCall('/api/login/', {
        method: 'POST',
        body: JSON.stringify(credentials)
    });
};
const sendOTP = async (email)=>{
    return apiCall('/api/send-otp/', {
        method: 'POST',
        body: JSON.stringify({
            email
        })
    });
};
const verifyOTP = async (email, otp)=>{
    return apiCall('/api/verify-otp/', {
        method: 'POST',
        body: JSON.stringify({
            email,
            otp
        })
    });
};
const getDashboardUrl = (userType)=>{
    var _userType_toLowerCase;
    // Validate and normalize user type
    const normalizedType = userType === null || userType === void 0 ? void 0 : (_userType_toLowerCase = userType.toLowerCase()) === null || _userType_toLowerCase === void 0 ? void 0 : _userType_toLowerCase.trim();
    switch(normalizedType){
        case 'seeker':
            return '/dashboard/seeker';
        case 'listener':
            return '/dashboard/listener';
        default:
            return '/dashboard/seeker';
    }
};
const isValidUserType = (userType)=>{
    var _userType_toLowerCase;
    const validTypes = [
        'seeker',
        'listener'
    ];
    return validTypes.includes(userType === null || userType === void 0 ? void 0 : (_userType_toLowerCase = userType.toLowerCase()) === null || _userType_toLowerCase === void 0 ? void 0 : _userType_toLowerCase.trim());
};
const listenerCarouselData = async ()=>{
    try {
        const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])('/api/listenerList'));
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
};
const listenerCategoryWise = async (categorySlug)=>{
    return apiCall('/api/listenerList/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            category_id: categorySlug
        })
    });
};
const listenerList = async (listenerId)=>{
    return apiCall('/api/listenerList/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listener_id: listenerId
        })
    });
};
const connectionList = async ()=>{
    return apiCall('/api/get-connection-list/', {
        method: 'GET',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const connectedListeners = async ()=>{
    return apiCall('/api/connections/', {
        method: 'GET',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const getRooms = async ()=>{
    return apiCall('/chat/rooms/', {
        method: 'GET',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const startDirectChat = async (listener_id)=>{
    return apiCall('/chat/start-direct/', {
        method: 'POST',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            recipient_id: listener_id
        })
    });
};
const getMessages = async (room_id)=>{
    return apiCall("/chat/".concat(room_id, "/messages/"), {
        method: 'GET',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const acceptConnection = async (connectionId, action)=>{
    return apiCall('/api/accept-connection/', {
        method: 'POST',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            connection_id: connectionId,
            action: action
        })
    });
};
const connection = async (listener_id)=>{
    return apiCall('/api/connection-request/', {
        method: 'POST',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listener_id: listener_id
        })
    });
};
const getUserProfile = async ()=>{
    return apiCall('/api/user-profile/', {
        method: 'GET',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const updateUserProfile = async (profileData)=>{
    try {
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])('/api/user-profile/');
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || '')
            },
            body: profileData
        });
        const data = await response.json();
        if (!response.ok) {
            return {
                success: false,
                error: data.message || data.error || "HTTP ".concat(response.status),
                data: data
            };
        }
        return {
            success: true,
            data: data,
            message: data.message
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Network error occurred'
        };
    }
};
const listener = async (listenerId)=>{
    return listenerList(listenerId);
};
const getCategories = async ()=>{
    return apiCall('/api/categories/', {
        method: 'GET'
    });
};
const getBlogs = async ()=>{
    return apiCall('/api/blogs/', {
        method: 'GET'
    });
};
const getBlogBySlug = async (slug)=>{
    return apiCall("/api/blogs/".concat(slug, "/"), {
        method: 'GET'
    });
};
const getTestimonials = async ()=>{
    return apiCall('/api/testimonials/', {
        method: 'GET'
    });
};
const getTestimonialById = async (id)=>{
    return apiCall("/api/testimonials/".concat(id, "/"), {
        method: 'GET'
    });
};
const createTestimonial = async (testimonialData)=>{
    return apiCall('/api/testimonials/', {
        method: 'POST',
        body: JSON.stringify(testimonialData)
    });
};
const updateTestimonial = async (id, testimonialData)=>{
    return apiCall("/api/testimonials/".concat(id, "/"), {
        method: 'PUT',
        body: JSON.stringify(testimonialData)
    });
};
const deleteTestimonial = async (id)=>{
    return apiCall("/api/testimonials/".concat(id, "/"), {
        method: 'DELETE'
    });
};
const isListenerConnected = (listenerId, connectedListeners)=>{
    return connectedListeners.some((conn)=>{
        var _conn_listener_profile;
        return ((_conn_listener_profile = conn.listener_profile) === null || _conn_listener_profile === void 0 ? void 0 : _conn_listener_profile.l_id) === listenerId && conn.status === 'Accepted';
    });
};
const likeBlog = async (blogId)=>{
    return apiCall("/api/blogs/".concat(blogId, "/like/"), {
        method: 'POST',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const unlikeBlog = async (blogId)=>{
    return apiCall("/api/blogs/".concat(blogId, "/like/"), {
        method: 'DELETE',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const toggleBlogLike = async (blogId)=>{
    return apiCall("/api/blogs/".concat(blogId, "/toggle-like/"), {
        method: 'POST',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const getBlogLikes = async (blogId)=>{
    return apiCall("/api/blogs/".concat(blogId, "/likes/"), {
        method: 'GET',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const submitRatingFeedback = async (data)=>{
    return apiCall('/api/ratings/', {
        method: 'POST',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
const getListenerRatings = async (listenerId)=>{
    return apiCall("/api/ratings/listener/".concat(listenerId, "/"), {
        method: 'GET',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const getListenerRatingStats = async (listenerId)=>{
    return apiCall("/api/ratings/listener/".concat(listenerId, "/stats/"), {
        method: 'GET',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const markMessagesAsRead = async (roomId)=>{
    return apiCall("/chat/".concat(roomId, "/mark-read/"), {
        method: 'POST',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
const getUnreadCounts = async ()=>{
    return apiCall('/chat/unread-counts/', {
        method: 'GET',
        headers: {
            'Authorization': "Bearer ".concat(localStorage.getItem('adminToken') || ''),
            'Content-Type': 'application/json'
        }
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/Components/UserDropdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const UserDropdown = ()=>{
    _s();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = ()=>{
        logout();
        router.push('/login');
    };
    const handleProfileClick = ()=>{
        if (user === null || user === void 0 ? void 0 : user.user_type) {
            const profileUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDashboardUrl"])(user.user_type) + '/profile';
            router.push(profileUrl);
        }
    };
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleProfileClick,
                className: "flex items-center space-x-2 px-3 py-2 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            className: "w-4 h-4 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/Components/UserDropdown.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/Components/UserDropdown.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-lg text-black",
                        children: [
                            "Hello, ",
                            user.full_name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Components/UserDropdown.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/UserDropdown.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleLogout,
                className: "flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200 border border-red-200 hover:border-red-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/UserDropdown.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/UserDropdown.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/UserDropdown.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Components/UserDropdown.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserDropdown, "mU4omnRdQA8PySeBpGE/lWg2WMg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserDropdown;
const __TURBOPACK__default__export__ = UserDropdown;
var _c;
__turbopack_context__.k.register(_c, "UserDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useNotifications.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useNotifications": ()=>useNotifications
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const API_BASE_URL = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureApiPrefix"])(("TURBOPACK compile-time value", "https://lissnify-v2.onrender.com")) : "TURBOPACK unreachable";
const useNotifications = ()=>{
    _s();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getAuthHeaders = ()=>{
        const token = localStorage.getItem('adminToken');
        return {
            'Authorization': "Bearer ".concat(token),
            'Content-Type': 'application/json'
        };
    };
    const fetchNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotifications.useCallback[fetchNotifications]": async (params)=>{
            setLoading(true);
            setError(null);
            try {
                const queryParams = new URLSearchParams();
                if (params === null || params === void 0 ? void 0 : params.type) queryParams.append('type', params.type);
                if ((params === null || params === void 0 ? void 0 : params.is_read) !== undefined) queryParams.append('is_read', params.is_read.toString());
                if (params === null || params === void 0 ? void 0 : params.page) queryParams.append('page', params.page.toString());
                if (params === null || params === void 0 ? void 0 : params.page_size) queryParams.append('page_size', params.page_size.toString());
                const response = await fetch("".concat(API_BASE_URL, "/notifications/?").concat(queryParams.toString()), {
                    headers: getAuthHeaders()
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch notifications');
                }
                const data = await response.json();
                setNotifications(data.notifications);
                return data;
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                throw err;
            } finally{
                setLoading(false);
            }
        }
    }["useNotifications.useCallback[fetchNotifications]"], []);
    const fetchStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotifications.useCallback[fetchStats]": async ()=>{
            try {
                const response = await fetch("".concat(API_BASE_URL, "/notifications/stats/"), {
                    headers: getAuthHeaders()
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch notification stats');
                }
                const data = await response.json();
                setStats(data);
                return data;
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                throw err;
            }
        }
    }["useNotifications.useCallback[fetchStats]"], []);
    const fetchSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotifications.useCallback[fetchSettings]": async ()=>{
            try {
                const response = await fetch("".concat(API_BASE_URL, "/notifications/settings/"), {
                    headers: getAuthHeaders()
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch notification settings');
                }
                const data = await response.json();
                setSettings(data);
                return data;
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                throw err;
            }
        }
    }["useNotifications.useCallback[fetchSettings]"], []);
    const markAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotifications.useCallback[markAsRead]": async (notificationId)=>{
            try {
                const response = await fetch("".concat(API_BASE_URL, "/notifications/").concat(notificationId, "/"), {
                    method: 'PATCH',
                    headers: getAuthHeaders(),
                    body: JSON.stringify({
                        is_read: true
                    })
                });
                if (!response.ok) {
                    throw new Error('Failed to mark notification as read');
                }
                // Update local state
                setNotifications({
                    "useNotifications.useCallback[markAsRead]": (prev)=>prev.map({
                            "useNotifications.useCallback[markAsRead]": (notification)=>notification.id === notificationId ? {
                                    ...notification,
                                    is_read: true
                                } : notification
                        }["useNotifications.useCallback[markAsRead]"])
                }["useNotifications.useCallback[markAsRead]"]);
                // Update stats
                if (stats) {
                    setStats({
                        "useNotifications.useCallback[markAsRead]": (prev)=>prev ? {
                                ...prev,
                                unread_notifications: Math.max(0, prev.unread_notifications - 1)
                            } : null
                    }["useNotifications.useCallback[markAsRead]"]);
                }
                return await response.json();
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                throw err;
            }
        }
    }["useNotifications.useCallback[markAsRead]"], [
        stats
    ]);
    const markAllAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotifications.useCallback[markAllAsRead]": async ()=>{
            try {
                const response = await fetch("".concat(API_BASE_URL, "/notifications/mark-all-read/"), {
                    method: 'POST',
                    headers: getAuthHeaders()
                });
                if (!response.ok) {
                    throw new Error('Failed to mark all notifications as read');
                }
                // Update local state
                setNotifications({
                    "useNotifications.useCallback[markAllAsRead]": (prev)=>prev.map({
                            "useNotifications.useCallback[markAllAsRead]": (notification)=>({
                                    ...notification,
                                    is_read: true
                                })
                        }["useNotifications.useCallback[markAllAsRead]"])
                }["useNotifications.useCallback[markAllAsRead]"]);
                // Update stats
                setStats({
                    "useNotifications.useCallback[markAllAsRead]": (prev)=>prev ? {
                            ...prev,
                            unread_notifications: 0
                        } : null
                }["useNotifications.useCallback[markAllAsRead]"]);
                return await response.json();
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                throw err;
            }
        }
    }["useNotifications.useCallback[markAllAsRead]"], []);
    const updateSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotifications.useCallback[updateSettings]": async (newSettings)=>{
            try {
                const response = await fetch("".concat(API_BASE_URL, "/notifications/settings/"), {
                    method: 'PUT',
                    headers: getAuthHeaders(),
                    body: JSON.stringify(newSettings)
                });
                if (!response.ok) {
                    throw new Error('Failed to update notification settings');
                }
                const data = await response.json();
                setSettings(data);
                return data;
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                throw err;
            }
        }
    }["useNotifications.useCallback[updateSettings]"], []);
    const deleteNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotifications.useCallback[deleteNotification]": async (notificationId)=>{
            try {
                const response = await fetch("".concat(API_BASE_URL, "/notifications/").concat(notificationId, "/"), {
                    method: 'DELETE',
                    headers: getAuthHeaders()
                });
                if (!response.ok) {
                    throw new Error('Failed to delete notification');
                }
                // Update local state
                setNotifications({
                    "useNotifications.useCallback[deleteNotification]": (prev)=>prev.filter({
                            "useNotifications.useCallback[deleteNotification]": (notification)=>notification.id !== notificationId
                        }["useNotifications.useCallback[deleteNotification]"])
                }["useNotifications.useCallback[deleteNotification]"]);
                // Update stats
                if (stats) {
                    setStats({
                        "useNotifications.useCallback[deleteNotification]": (prev)=>prev ? {
                                ...prev,
                                total_notifications: Math.max(0, prev.total_notifications - 1),
                                unread_notifications: Math.max(0, prev.unread_notifications - 1)
                            } : null
                    }["useNotifications.useCallback[deleteNotification]"]);
                }
                return true;
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                throw err;
            }
        }
    }["useNotifications.useCallback[deleteNotification]"], [
        stats
    ]);
    // Load initial data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNotifications.useEffect": ()=>{
            fetchNotifications();
            fetchStats();
            fetchSettings();
        }
    }["useNotifications.useEffect"], [
        fetchNotifications,
        fetchStats,
        fetchSettings
    ]);
    // Function to refresh stats (can be called from WebSocket)
    const refreshStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNotifications.useCallback[refreshStats]": ()=>{
            fetchStats();
        }
    }["useNotifications.useCallback[refreshStats]"], [
        fetchStats
    ]);
    return {
        notifications,
        stats,
        settings,
        loading,
        error,
        fetchNotifications,
        fetchStats,
        fetchSettings,
        markAsRead,
        markAllAsRead,
        updateSettings,
        deleteNotification,
        refreshStats
    };
};
_s(useNotifications, "+Qt1Q+ND48D5n5/80TxXMpkpPuU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useNotificationWebSocket.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useNotificationWebSocket": ()=>useNotificationWebSocket
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const WS_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WS_URL || 'wss://lissnify-v2.onrender.com';
const useNotificationWebSocket = (onNotificationReceived)=>{
    _s();
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [newNotification, setNewNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const reconnectTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectAttempts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const maxReconnectAttempts = 5;
    const connect = ()=>{
        const token = localStorage.getItem('adminToken');
        if (!token) {
            return;
        }
        try {
            const wsUrl = "".concat(WS_BASE_URL, "/ws/notifications/?token=").concat(token);
            const newSocket = new WebSocket(wsUrl);
            newSocket.onopen = ()=>{
                setIsConnected(true);
                reconnectAttempts.current = 0;
                // Request initial unread count
                getUnreadCount();
            };
            newSocket.onmessage = (event)=>{
                try {
                    const data = JSON.parse(event.data);
                    if (data.type === 'notification' && data.notification) {
                        setNewNotification(data.notification);
                        // Call the callback to refresh stats
                        if (onNotificationReceived) {
                            onNotificationReceived();
                        }
                    } else if (data.type === 'unread_count' && data.count !== undefined) {
                        setUnreadCount(data.count);
                    }
                } catch (error) {}
            };
            newSocket.onclose = (event)=>{
                setIsConnected(false);
                // Attempt to reconnect if not a manual close
                if (event.code !== 1000 && reconnectAttempts.current < maxReconnectAttempts) {
                    const delay = Math.pow(2, reconnectAttempts.current) * 1000; // Exponential backoff
                    reconnectTimeoutRef.current = setTimeout(()=>{
                        reconnectAttempts.current++;
                        connect();
                    }, delay);
                } else if (reconnectAttempts.current >= maxReconnectAttempts) {}
            };
            newSocket.onerror = (error)=>{
                // Don't show error immediately on first attempt - let onclose handle retry logic
                if (reconnectAttempts.current === 0) {}
            };
            setSocket(newSocket);
        } catch (error) {}
    };
    const disconnect = ()=>{
        if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current);
            reconnectTimeoutRef.current = null;
        }
        if (socket) {
            socket.close(1000, 'Manual disconnect');
            setSocket(null);
        }
        setIsConnected(false);
    };
    const markAsRead = (notificationId)=>{
        if (socket && isConnected) {
            socket.send(JSON.stringify({
                type: 'mark_read',
                notification_id: notificationId
            }));
        }
    };
    const getUnreadCount = ()=>{
        if (socket && isConnected) {
            socket.send(JSON.stringify({
                type: 'get_unread_count'
            }));
        }
    };
    // Connect on mount with a delay to allow authentication to complete
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNotificationWebSocket.useEffect": ()=>{
            // Delay to ensure authentication is ready
            const connectTimeout = setTimeout({
                "useNotificationWebSocket.useEffect.connectTimeout": ()=>{
                    connect();
                }
            }["useNotificationWebSocket.useEffect.connectTimeout"], 500);
            return ({
                "useNotificationWebSocket.useEffect": ()=>{
                    clearTimeout(connectTimeout);
                    disconnect();
                }
            })["useNotificationWebSocket.useEffect"];
        }
    }["useNotificationWebSocket.useEffect"], []);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNotificationWebSocket.useEffect": ()=>{
            return ({
                "useNotificationWebSocket.useEffect": ()=>{
                    if (reconnectTimeoutRef.current) {
                        clearTimeout(reconnectTimeoutRef.current);
                    }
                }
            })["useNotificationWebSocket.useEffect"];
        }
    }["useNotificationWebSocket.useEffect"], []);
    return {
        isConnected,
        unreadCount,
        newNotification,
        markAsRead,
        getUnreadCount,
        connect,
        disconnect
    };
};
_s(useNotificationWebSocket, "SlzaTbtfeErAq8TN/fhN48wh4JE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/Components/NotificationBell.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>NotificationBell
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNotifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNotificationWebSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNotificationWebSocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function NotificationBell(param) {
    let { className = '' } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { notifications, stats, settings, loading, markAsRead, markAllAsRead, deleteNotification, updateSettings, refreshStats, fetchNotifications } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])();
    const { isConnected, unreadCount, newNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNotificationWebSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationWebSocket"])({
        "NotificationBell.useNotificationWebSocket": ()=>{
            // Refresh stats when a new notification is received
            refreshStats();
        }
    }["NotificationBell.useNotificationWebSocket"]);
    // Debug logging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
        // NotificationBell state updated
        }
    }["NotificationBell.useEffect"], [
        isConnected,
        unreadCount,
        stats
    ]);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
            const handleClickOutside = {
                "NotificationBell.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                        setShowSettings(false);
                    }
                }
            }["NotificationBell.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "NotificationBell.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["NotificationBell.useEffect"];
        }
    }["NotificationBell.useEffect"], []);
    // Show new notification toast
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
            if (newNotification) {
            // You can implement a toast notification here
            }
        }
    }["NotificationBell.useEffect"], [
        newNotification
    ]);
    const handleMarkAsRead = async (notificationId)=>{
        try {
            await markAsRead(notificationId);
        } catch (error) {
        // Error marking notification as read
        }
    };
    const handleMarkAllAsRead = async ()=>{
        try {
            await markAllAsRead();
        } catch (error) {
        // Error marking all notifications as read
        }
    };
    const handleDeleteNotification = async (notificationId)=>{
        try {
            await deleteNotification(notificationId);
        } catch (error) {
        // Error deleting notification
        }
    };
    const handleUpdateSettings = async (newSettings)=>{
        try {
            await updateSettings(newSettings);
        } catch (error) {
        // Error updating settings
        }
    };
    const handleDropdownToggle = async ()=>{
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        // If opening the dropdown, refresh notifications
        if (newIsOpen) {
            try {
                await fetchNotifications();
                await refreshStats();
            } catch (error) {
            // Error refreshing notifications
            }
        }
    };
    const handleTestNotification = async ()=>{
        try {
            const apiUrl = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureApiPrefix"])(("TURBOPACK compile-time value", "https://lissnify-v2.onrender.com")) : "TURBOPACK unreachable";
            const response = await fetch("".concat(apiUrl, "/notifications/test/"), {
                method: 'POST',
                headers: {
                    'Authorization': "Bearer ".concat(localStorage.getItem('adminToken')),
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                // Refresh notifications
                fetchNotifications();
                refreshStats();
            } else {}
        } catch (error) {}
    };
    const getNotificationIcon = (type)=>{
        switch(type){
            case 'message':
                return '💬';
            case 'connection_request':
                return '👥';
            case 'connection_accepted':
                return '✅';
            case 'connection_rejected':
                return '❌';
            case 'system':
                return '🔔';
            default:
                return '🔔';
        }
    };
    const formatTimeAgo = (dateString)=>{
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return "".concat(Math.floor(diffInSeconds / 60), "m ago");
        if (diffInSeconds < 86400) return "".concat(Math.floor(diffInSeconds / 3600), "h ago");
        return "".concat(Math.floor(diffInSeconds / 86400), "d ago");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative ".concat(className),
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleDropdownToggle,
                className: "relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/NotificationBell.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    (()=>{
                        const count = (stats === null || stats === void 0 ? void 0 : stats.unread_notifications) || 0;
                        return count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",
                            children: count > 99 ? '99+' : count
                        }, void 0, false, {
                            fileName: "[project]/src/Components/NotificationBell.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this);
                    })(),
                    !isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/NotificationBell.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/NotificationBell.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: [
                                        "Notifications",
                                        stats && stats.unread_notifications > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-sm text-gray-500",
                                            children: [
                                                "(",
                                                stats.unread_notifications,
                                                " unread)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleTestNotification,
                                            className: "p-1 text-blue-400 hover:text-blue-600 rounded text-xs",
                                            title: "Test notification",
                                            children: "🧪"
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowSettings(!showSettings),
                                            className: "p-1 text-gray-400 hover:text-gray-600 rounded",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/NotificationBell.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsOpen(false),
                                            className: "p-1 text-gray-400 hover:text-gray-600 rounded",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/NotificationBell.tsx",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/NotificationBell.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/Components/NotificationBell.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    showSettings && settings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-gray-200 bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-medium text-gray-900 mb-3",
                                children: "Notification Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/Components/NotificationBell.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: Object.entries(settings).map((param)=>{
                                    let [key, value] = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: value,
                                                onChange: (e)=>handleUpdateSettings({
                                                        [key]: e.target.checked
                                                    }),
                                                className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/NotificationBell.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-700 capitalize",
                                                children: key.replace('_', ' ')
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/NotificationBell.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/src/Components/NotificationBell.tsx",
                                        lineNumber: 230,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/Components/NotificationBell.tsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Components/NotificationBell.tsx",
                        lineNumber: 226,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-96 overflow-y-auto",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 text-center text-gray-500",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/Components/NotificationBell.tsx",
                            lineNumber: 249,
                            columnNumber: 15
                        }, this) : notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 text-center text-gray-500",
                            children: "No notifications"
                        }, void 0, false, {
                            fileName: "[project]/src/Components/NotificationBell.tsx",
                            lineNumber: 251,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                stats && stats.unread_notifications > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 border-b border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleMarkAllAsRead,
                                        className: "w-full text-left text-sm text-blue-600 hover:text-blue-800 py-1",
                                        children: "Mark all as read"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/NotificationBell.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this),
                                notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-b border-gray-100 hover:bg-gray-50 ".concat(!notification.is_read ? 'bg-blue-50' : ''),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg",
                                                    children: getNotificationIcon(notification.notification_type)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-gray-900 truncate",
                                                                    children: notification.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-1",
                                                                    children: [
                                                                        !notification.is_read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleMarkAsRead(notification.id),
                                                                            className: "p-1 text-gray-400 hover:text-green-600 rounded",
                                                                            title: "Mark as read",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/Components/NotificationBell.tsx",
                                                                                lineNumber: 287,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                                                            lineNumber: 282,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDeleteNotification(notification.id),
                                                                            className: "p-1 text-gray-400 hover:text-red-600 rounded",
                                                                            title: "Delete",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/Components/NotificationBell.tsx",
                                                                                lineNumber: 295,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                                                            lineNumber: 290,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600 mt-1 line-clamp-2",
                                                            children: notification.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: formatTimeAgo(notification.created_at)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 27
                                                                }, this),
                                                                notification.sender_username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: [
                                                                        "from ",
                                                                        notification.sender_username
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/Components/NotificationBell.tsx",
                                            lineNumber: 271,
                                            columnNumber: 21
                                        }, this)
                                    }, notification.id, false, {
                                        fileName: "[project]/src/Components/NotificationBell.tsx",
                                        lineNumber: 265,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/Components/NotificationBell.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-t border-gray-200 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-xs text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Total: ",
                                        stats.total_notifications
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                    lineNumber: 324,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Unread: ",
                                        stats.unread_notifications
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/NotificationBell.tsx",
                                    lineNumber: 325,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/NotificationBell.tsx",
                            lineNumber: 323,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/Components/NotificationBell.tsx",
                        lineNumber: 322,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/NotificationBell.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/Components/NotificationBell.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(NotificationBell, "/GgUqa8iCK2U12oUxjxGCk82Hk4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNotificationWebSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationWebSocket"]
    ];
});
_c = NotificationBell;
var _c;
__turbopack_context__.k.register(_c, "NotificationBell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/Components/Navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Navbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$UserDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/UserDropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$NotificationBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/NotificationBell.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated, isLoading, user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Get dashboard URL based on user type
    const getDashboardUrlLocal = ()=>{
        if (!user) return "/";
        return user.user_type === "seeker" ? "/dashboard/seeker" : "/dashboard/listener";
    };
    // Base navigation items (always shown)
    const baseNavItems = [
        {
            name: "Home",
            href: "/",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            name: "Community",
            href: "/community",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            name: "Blog",
            href: "/blog",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        }
    ];
    // Dashboard item (only shown when logged in)
    const dashboardItem = {
        name: "Dashboard",
        href: getDashboardUrlLocal(),
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    };
    // Combine navigation items based on authentication status
    const navItems = isAuthenticated ? [
        ...baseNavItems,
        dashboardItem
    ] : baseNavItems;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "jsx-35ae1f5326cd5ae3" + " " + "bg-white/95 backdrop-blur-md border-b-3 border-[#FFB88C]/30 px-6 py-2 fixed top-0 left-0 right-0 z-50 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-35ae1f5326cd5ae3" + " " + "absolute inset-0 bg-gradient-to-r from-[#FFF8B5]/5 to-[#FFB88C]/5 opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/Components/Navbar.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-35ae1f5326cd5ae3" + " " + "absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-[#FFF8B5]/20 to-[#F9E79F]/10 rounded-full blur-2xl"
            }, void 0, false, {
                fileName: "[project]/src/Components/Navbar.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-35ae1f5326cd5ae3" + " " + "absolute top-0 right-1/3 w-24 h-24 bg-gradient-to-br from-[#FFB88C]/15 to-[#FFD1A9]/10 rounded-full blur-xl"
            }, void 0, false, {
                fileName: "[project]/src/Components/Navbar.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-35ae1f5326cd5ae3" + " " + "container mx-auto flex justify-between items-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-35ae1f5326cd5ae3" + " " + "flex items-center gap-2 sm:gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center hover:opacity-60 transition-opacity duration-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Lissnify Logo",
                                className: "jsx-35ae1f5326cd5ae3" + " " + "h-12 w-auto sm:h-14 md:h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Navbar.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/Components/Navbar.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Navbar.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-35ae1f5326cd5ae3" + " " + "hidden lg:flex items-center space-x-1 xl:space-x-2",
                        children: [
                            navItems.map((item, index)=>{
                                const IconComponent = item.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "group relative px-3 xl:px-5 py-2 xl:py-3 rounded-2xl text-black font-bold transition-all duration-300 hover:bg-white/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-35ae1f5326cd5ae3" + " " + "flex items-center gap-2 xl:gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-35ae1f5326cd5ae3" + " " + "transition-colors duration-300 text-sm xl:text-lg",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Navbar.jsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Navbar.jsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-35ae1f5326cd5ae3" + " " + "absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#FFB88C] to-[#F9E79F] group-hover:w-3/4 transition-all duration-300 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Navbar.jsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/Components/Navbar.jsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-35ae1f5326cd5ae3" + " " + "ml-4 xl:ml-8 pl-2 xl:pl-4 border-l-2 xl:border-l-3 border-[#FFB88C]/40 flex items-center gap-2 xl:gap-3 relative",
                                children: !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: isAuthenticated ? // Show notification bell and user dropdown when logged in
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$NotificationBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/Components/Navbar.jsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$UserDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/Components/Navbar.jsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : // Show login/signup buttons when not logged in
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "jsx-35ae1f5326cd5ae3" + " " + "group relative px-3 xl:px-6 py-1.5 xl:py-2 rounded-2xl text-black font-bold bg-white/70 hover:bg-white/90 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl overflow-hidden border-2 border-[#FFB88C]/30 text-xs xl:text-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-35ae1f5326cd5ae3" + " " + "relative flex items-center gap-1 xl:gap-2",
                                                        children: "Login"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/Components/Navbar.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/Components/Navbar.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Navbar.jsx",
                                                lineNumber: 90,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/signup",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "jsx-35ae1f5326cd5ae3" + " " + "group relative px-3 xl:px-6 py-1.5 xl:py-2 rounded-2xl text-white font-bold bg-gradient-to-r from-[#CD853F] to-[#D2691E] hover:from-[#D2691E] hover:to-[#CD853F] transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl overflow-hidden border-2 border-white/30 text-xs xl:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-35ae1f5326cd5ae3" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/Components/Navbar.jsx",
                                                            lineNumber: 99,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-35ae1f5326cd5ae3" + " " + "relative flex items-center gap-1 xl:gap-2",
                                                            children: "Sign Up"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/Components/Navbar.jsx",
                                                            lineNumber: 100,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/Components/Navbar.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Navbar.jsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Navbar.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Components/Navbar.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "jsx-35ae1f5326cd5ae3" + " " + "lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 bg-white/70 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#FFB88C]/30 group shadow-lg border-2 border-[#FFB88C]/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-35ae1f5326cd5ae3" + " " + "absolute inset-0 bg-gradient-to-br from-[#FFF8B5]/10 to-[#FFB88C]/5 rounded-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Navbar.jsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 sm:w-6 sm:h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors duration-300 relative z-10"
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Navbar.jsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-5 h-5 sm:w-6 sm:h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors duration-300 relative z-10"
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Navbar.jsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Components/Navbar.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/Navbar.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-35ae1f5326cd5ae3" + " " + "lg:hidden mt-4 sm:mt-6 bg-white/95 backdrop-blur-md rounded-3xl border-3 border-[#FFB88C]/30 shadow-2xl p-4 sm:p-6 mx-2 sm:mx-4 animate-fadeIn relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-35ae1f5326cd5ae3" + " " + "absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FFF8B5]/20 to-[#F9E79F]/10 rounded-full blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Navbar.jsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-35ae1f5326cd5ae3" + " " + "absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-[#FFB88C]/15 to-[#FFD1A9]/10 rounded-full blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Navbar.jsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-35ae1f5326cd5ae3" + " " + "space-y-2 sm:space-y-3 relative z-10",
                        children: navItems.map((item, index)=>{
                            const IconComponent = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "group flex items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 rounded-2xl text-[#8B4513] font-bold hover:bg-gradient-to-r hover:from-[#FFF8B5]/20 hover:to-[#FFB88C]/15 transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-[#FFB88C]/20",
                                onClick: ()=>setIsOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-35ae1f5326cd5ae3" + " " + "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFF8B5]/30 to-[#F9E79F]/20 rounded-2xl flex items-center justify-center group-hover:from-[#FFB88C]/30 group-hover:to-[#F9E79F]/30 transition-all duration-300 group-hover:scale-110 shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            className: "jsx-35ae1f5326cd5ae3" + " " + "w-5 h-5 sm:w-6 sm:h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Navbar.jsx",
                                            lineNumber: 145,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/Navbar.jsx",
                                        lineNumber: 144,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-35ae1f5326cd5ae3" + " " + "group-hover:text-[#A0522D] transition-colors duration-300 text-lg sm:text-xl",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/Navbar.jsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-35ae1f5326cd5ae3" + " " + "ml-auto w-2 h-2 bg-gradient-to-r from-[#FFB88C] to-[#F9E79F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/Navbar.jsx",
                                        lineNumber: 148,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/Components/Navbar.jsx",
                                lineNumber: 138,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Navbar.jsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-35ae1f5326cd5ae3" + " " + "mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-[#FFB88C]/30 relative z-10 space-y-2 sm:space-y-3",
                        children: !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: isAuthenticated ? // Show user info in mobile menu when logged in
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-35ae1f5326cd5ae3" + " " + "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-35ae1f5326cd5ae3" + " " + "flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    const profileUrl = getDashboardUrlLocal() + '/profile';
                                                    router.push(profileUrl);
                                                    setIsOpen(false);
                                                },
                                                className: "jsx-35ae1f5326cd5ae3" + " " + "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/Components/Navbar.jsx",
                                                    lineNumber: 170,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Navbar.jsx",
                                                lineNumber: 162,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-35ae1f5326cd5ae3" + " " + "flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$NotificationBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/Components/Navbar.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Navbar.jsx",
                                                lineNumber: 172,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Components/Navbar.jsx",
                                        lineNumber: 161,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        onClick: ()=>{
                                            const profileUrl = getDashboardUrlLocal() + '/profile';
                                            router.push(profileUrl);
                                            setIsOpen(false);
                                        },
                                        className: "jsx-35ae1f5326cd5ae3" + " " + "text-base sm:text-lg font-bold text-black mb-3 sm:mb-4 cursor-pointer hover:text-orange-600 transition-colors duration-200",
                                        children: [
                                            "Hello, ",
                                            user === null || user === void 0 ? void 0 : user.full_name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Components/Navbar.jsx",
                                        lineNumber: 176,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            logout();
                                            // 2. Then, clear the browser storage.
                                            localStorage.clear();
                                            localStorage.removeItem("adminToken");
                                            // 3. Finally, close the menu.
                                            setIsOpen(false);
                                        },
                                        className: "jsx-35ae1f5326cd5ae3" + " " + "group w-full relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-red-600 font-bold bg-white/70 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden border-2 border-red-200 hover:border-red-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-35ae1f5326cd5ae3" + " " + "relative flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "w-5 h-5 sm:w-6 sm:h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/Components/Navbar.jsx",
                                                    lineNumber: 199,
                                                    columnNumber: 25
                                                }, this),
                                                "Sign Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/Components/Navbar.jsx",
                                            lineNumber: 198,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/Navbar.jsx",
                                        lineNumber: 186,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Components/Navbar.jsx",
                                lineNumber: 160,
                                columnNumber: 19
                            }, this) : // Show login/signup buttons when not logged in
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: ()=>setIsOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "jsx-35ae1f5326cd5ae3" + " " + "group w-full relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-black font-bold bg-white/70 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden border-2 border-[#FFB88C]/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-35ae1f5326cd5ae3" + " " + "relative flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-xl",
                                                children: "Login"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Navbar.jsx",
                                                lineNumber: 209,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Navbar.jsx",
                                            lineNumber: 208,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/Navbar.jsx",
                                        lineNumber: 207,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/signup",
                                        onClick: ()=>setIsOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "jsx-35ae1f5326cd5ae3" + " " + "group w-full relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-white font-bold bg-gradient-to-r from-[#CD853F] to-[#D2691E] hover:from-[#D2691E] hover:to-[#CD853F] transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden hover:scale-105 border-2 border-white/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-35ae1f5326cd5ae3" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/Components/Navbar.jsx",
                                                    lineNumber: 216,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-35ae1f5326cd5ae3" + " " + "relative flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-xl",
                                                    children: "Sign Up"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/Components/Navbar.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/Components/Navbar.jsx",
                                            lineNumber: 215,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/Navbar.jsx",
                                        lineNumber: 214,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false)
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Navbar.jsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/Navbar.jsx",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "35ae1f5326cd5ae3",
                children: "@keyframes fadeIn{0%{opacity:0;transform:translateY(-15px)scale(.95)}to{opacity:1;transform:translateY(0)scale(1)}}.animate-fadeIn.jsx-35ae1f5326cd5ae3{animation:.4s ease-out fadeIn}.shadow-3xl.jsx-35ae1f5326cd5ae3{box-shadow:0 25px 50px -12px rgba(139,69,19,.25)}.border-3.jsx-35ae1f5326cd5ae3{border-width:3px}nav.jsx-35ae1f5326cd5ae3{z-index:9999!important;width:100%!important;position:fixed!important;top:0!important;left:0!important;right:0!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/Components/Navbar.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Navbar, "Anh74o5bTmi4WLbELME9DNP3Ft4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/Components/DashboardSidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>DashboardSidebar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as Users2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DashboardSidebar(param) {
    let { userType } = param;
    _s();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileOpen, setIsMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const seekerNavItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
            path: '/dashboard/seeker'
        },
        {
            id: 'chats',
            label: 'Chats',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            path: '/dashboard/seeker/chats'
        },
        {
            id: 'community',
            label: 'Community',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users2$3e$__["Users2"],
            path: '/community'
        },
        {
            id: 'profile',
            label: 'Profile',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            path: '/dashboard/seeker/profile'
        },
        {
            id: 'feedback',
            label: 'Feedback',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
            path: '/dashboard/seeker/feedback'
        }
    ];
    const listenerNavItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
            path: '/dashboard/listener'
        },
        {
            id: 'chats',
            label: 'Chats',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            path: '/dashboard/listener/chats'
        },
        {
            id: 'community',
            label: 'Community',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users2$3e$__["Users2"],
            path: '/community'
        },
        {
            id: 'profile',
            label: 'Profile',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            path: '/dashboard/listener/profile'
        }
    ];
    const navItems = userType === 'seeker' ? seekerNavItems : listenerNavItems;
    const handleNavigation = (path)=>{
        router.push(path);
        setIsMobileOpen(false); // Close mobile menu after navigation
    };
    const isActive = (path)=>{
        return pathname === path;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsMobileOpen(!isMobileOpen),
                className: "lg:hidden fixed top-20 sm:top-24 left-2 sm:left-4 z-50 p-2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-white/50",
                "aria-label": "Toggle sidebar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/src/Components/DashboardSidebar.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/Components/DashboardSidebar.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            isMobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 bg-black/50 z-40",
                onClick: ()=>setIsMobileOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/Components/DashboardSidebar.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-0 top-16 sm:top-20 h-full bg-white/90 backdrop-blur-md shadow-xl border-r border-white/50 z-50 transition-all duration-300 ".concat(isCollapsed ? 'w-16 sm:w-20' : 'w-56 sm:w-64', " ").concat(isMobileOpen ? 'block' : 'hidden', " lg:block"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6 sm:mb-8",
                            children: [
                                !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo.png",
                                        alt: "Lissnify Logo",
                                        className: "h-10 w-auto sm:h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsCollapsed(!isCollapsed),
                                    className: "p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors",
                                    "aria-label": isCollapsed ? "Expand sidebar" : "Collapse sidebar",
                                    children: isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 89
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/DashboardSidebar.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "space-y-2 sm:space-y-4",
                            children: navItems.map((item)=>{
                                const IconComponent = item.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigation(item.path),
                                    className: "w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base ".concat(isActive(item.path) ? 'bg-gradient-to-r from-[#FFB88C] to-[#FFF8B5] text-black shadow-lg' : 'text-gray-600 hover:bg-gray-50 hover:text-black'),
                                    "aria-label": item.label,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            className: "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this),
                                        !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                            lineNumber: 115,
                                            columnNumber: 36
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/Components/DashboardSidebar.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-4 sm:bottom-6 ".concat(isCollapsed ? 'left-3 right-3 sm:left-6 sm:right-6' : 'left-3 right-3 sm:left-6 sm:right-6'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 transition-all duration-200 text-sm sm:text-base",
                                "aria-label": "Logout",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                        lineNumber: 128,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Components/DashboardSidebar.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/Components/DashboardSidebar.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Components/DashboardSidebar.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/Components/DashboardSidebar.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DashboardSidebar, "GzqcNL2bwSl/vdZeYl+URG5i1o4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DashboardSidebar;
var _c;
__turbopack_context__.k.register(_c, "DashboardSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/Components/ProtectedRoute.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ProtectedRoute = (param)=>{
    let { children, redirectTo = '/login' } = param;
    _s();
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProtectedRoute.useEffect": ()=>{
            if (!isLoading && !isAuthenticated) {
                router.push(redirectTo);
            }
        }
    }["ProtectedRoute.useEffect"], [
        isAuthenticated,
        isLoading,
        router,
        redirectTo
    ]);
    // Show loading state while checking authentication
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/ProtectedRoute.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/Components/ProtectedRoute.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/ProtectedRoute.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Components/ProtectedRoute.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Show children only if authenticated
    if (!isAuthenticated) {
        return null; // Will redirect in useEffect
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
_s(ProtectedRoute, "mEH+GTDGNx6l1kiic8iucxoBZHI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProtectedRoute;
const __TURBOPACK__default__export__ = ProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/Components/DashboardLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>DashboardLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/DashboardSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/ProtectedRoute.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function DashboardLayout(param) {
    let { userType, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-[#FFF8B5] to-[#FFB88C]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/Components/DashboardLayout.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex pt-16 sm:pt-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            userType: userType
                        }, void 0, false, {
                            fileName: "[project]/src/Components/DashboardLayout.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full lg:ml-64 flex-1 p-2 sm:p-4 lg:p-6 xl:p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/Components/DashboardLayout.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/Components/DashboardLayout.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Components/DashboardLayout.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/DashboardLayout.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/Components/DashboardLayout.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/Components/CategoryCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CategoryCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function CategoryCard(param) {
    let { category, href, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "group block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\n          relative rounded-2xl bg-gradient-to-b from-white to-gray-50/50 \n          shadow-md hover:shadow-xl \n          transition-all duration-300 ease-out \n          cursor-pointer border border-gray-100 \n          hover:border-gray-200\n\n          overflow-hidden h-full\n          ".concat(className !== null && className !== void 0 ? className : '', "\n        "),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1 w-full ".concat(category.colors.borderTop)
                }, void 0, false, {
                    fileName: "[project]/src/Components/CategoryCard.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 sm:p-6 h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "\n              w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full ".concat(category.colors.bg, " \n              flex items-center justify-center \n              shadow-sm group-hover:shadow-md transition-shadow duration-300\n            "),
                                children: category.iconSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "".concat(category.iconSrc),
                                    alt: category.title,
                                    className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/CategoryCard.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this) : category.Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(category.Icon, {
                                    className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ".concat(category.colors.icon)
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/CategoryCard.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full ".concat(category.colors.icon)
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/CategoryCard.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/Components/CategoryCard.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/Components/CategoryCard.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center flex-grow flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "\n              text-lg sm:text-xl font-bold mb-3 \n              ".concat(category.colors.accent, " \n              group-hover:scale-105 transition-transform duration-300\n            "),
                                    children: category.title
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/CategoryCard.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mb-4 leading-relaxed flex-grow",
                                    children: category.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/CategoryCard.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mb-6 font-medium",
                                    children: category.supportText
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/CategoryCard.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "\n                inline-flex items-center gap-2 text-sm font-semibold\n                ".concat(category.colors.accent, " \n                border-b-2 border-transparent \n                group-hover:border-current\n                transition-all duration-300\n                group-hover:gap-3\n              "),
                                        children: [
                                            "You're not alone",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/Components/CategoryCard.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/CategoryCard.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Components/CategoryCard.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/CategoryCard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/CategoryCard.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Components/CategoryCard.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "   absolute inset-0    bg-gradient-to-br from-white/0 to-gray-100/0    group-hover:from-white/20 group-hover:to-gray-50/20    transition-all duration-300 pointer-events-none   rounded-2xl   "
                }, void 0, false, {
                    fileName: "[project]/src/Components/CategoryCard.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/CategoryCard.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/Components/CategoryCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = CategoryCard;
var _c;
__turbopack_context__.k.register(_c, "CategoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/categoryTransform.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "transformCategoriesForCards": ()=>transformCategoriesForCards,
    "transformCategoryForCard": ()=>transformCategoryForCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
const transformCategoryForCard = (apiCategory)=>{
    return {
        id: apiCategory.slug || apiCategory.id.toString(),
        title: apiCategory.name,
        subtitle: apiCategory.description,
        supportText: apiCategory.supportText,
        iconSrc: apiCategory.icon ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])("/".concat(apiCategory.icon)) : undefined,
        colors: {
            bg: "bg-[#FFF7E9]",
            borderTop: "bg-[#FFD39B]",
            icon: "text-[#FF9800]",
            accent: "text-[#FF9800]"
        }
    };
};
const transformCategoriesForCards = (apiCategories)=>{
    return apiCategories.map(transformCategoryForCard);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/seeker/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SeekerDashboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$DashboardLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/DashboardLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/CategoryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$categoryTransform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/categoryTransform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function SeekerDashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedChat, setSelectedChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectedListenersData, setConnectedListenersData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categoriesData, setCategoriesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categoriesLoading, setCategoriesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [categoriesError, setCategoriesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatLoading, setChatLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleCategories, setVisibleCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(6);
    const [isCategoriesExpanded, setIsCategoriesExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeekerDashboard.useEffect": ()=>{
            const fetchConnectedListeners = {
                "SeekerDashboard.useEffect.fetchConnectedListeners": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectedListeners"])();
                        if (response.success && response.data) {
                            setConnectedListenersData(response.data);
                        } else {
                            setError("Failed to fetch connected listeners");
                            setConnectedListenersData([]);
                        }
                    } catch (err) {
                        setError("Error fetching connected listeners");
                        setConnectedListenersData([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["SeekerDashboard.useEffect.fetchConnectedListeners"];
            const fetchCategories = {
                "SeekerDashboard.useEffect.fetchCategories": async ()=>{
                    try {
                        setCategoriesLoading(true);
                        setCategoriesError(null);
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategories"])();
                        if (response.success && response.data) {
                            setCategoriesData(response.data);
                        } else {
                            setCategoriesError("Failed to fetch categories");
                            setCategoriesData([]);
                        }
                    } catch (err) {
                        setCategoriesError("Error fetching categories");
                        setCategoriesData([]);
                    } finally{
                        setCategoriesLoading(false);
                    }
                }
            }["SeekerDashboard.useEffect.fetchCategories"];
            fetchConnectedListeners();
            fetchCategories();
        }
    }["SeekerDashboard.useEffect"], []);
    // Mock data for previously connected listeners (in real app, this would come from backend)
    const previouslyConnectedListeners = [
        {
            id: 4,
            name: "Dr. Priya Sharma",
            specialty: "Trauma & PTSD",
            rating: 4.9,
            experience: "10 years",
            avatar: "PS",
            status: "offline",
            lastActive: "2 weeks ago",
            lastMessage: "Take care of yourself. Remember our breathing exercises.",
            lastChatDate: "2 weeks ago",
            totalSessions: 8
        },
        {
            id: 5,
            name: "Dr. Michael Chen",
            specialty: "Family Therapy",
            rating: 4.8,
            experience: "12 years",
            avatar: "MC",
            status: "offline",
            lastActive: "1 month ago",
            lastMessage: "You've made great progress. Keep up the good work!",
            lastChatDate: "1 month ago",
            totalSessions: 12
        },
        {
            id: 6,
            name: "Dr. Sarah Johnson",
            specialty: "Grief Counseling",
            rating: 4.7,
            experience: "7 years",
            avatar: "SJ",
            status: "offline",
            lastActive: "3 weeks ago",
            lastMessage: "It's okay to feel this way. Grief has no timeline.",
            lastChatDate: "3 weeks ago",
            totalSessions: 5
        },
        {
            id: 7,
            name: "Dr. Raj Patel",
            specialty: "Addiction Recovery",
            rating: 4.6,
            experience: "9 years",
            avatar: "RP",
            status: "offline",
            lastActive: "1 week ago",
            lastMessage: "One day at a time. You're stronger than you think.",
            lastChatDate: "1 week ago",
            totalSessions: 15
        }
    ];
    const handleChatSelect = async (listener)=>{
        try {
            if (listener.status !== "Accepted") {
                alert("Connection not accepted yet.");
                return;
            }
            setChatLoading(true);
            setError(null);
            const rooms = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startDirectChat"])(listener.user_id);
            if (rooms.success) {
                const roomId = rooms.data.id;
                setSelectedChat(listener.connection_id);
                // Fetch existing messages
                const messages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMessages"])(roomId);
                if (messages.success && messages.data) {
                // Chat room created or fetched successfully
                } else {
                    setError("Failed to fetch messages");
                }
                // Navigate to chats page with the selected chat
                router.push("/dashboard/seeker/chats?connectionId=".concat(listener.connection_id));
            } else {
                setError("Failed to start chat");
            }
        } catch (error) {
            setError("Error starting chat");
        } finally{
            setChatLoading(false);
        }
    };
    const handleReconnect = (listenerId)=>{
        // In a real app, this would send a reconnection request
        // You could show a toast notification or modal here
        alert('Reconnection request sent! The listener will be notified.');
    };
    const handleViewPreviousChats = (listenerId)=>{
        // In a real app, this would open the chat history
        setSelectedChat(listenerId);
        router.push('/dashboard/seeker/chats');
    };
    const handleLoadMoreCategories = ()=>{
        if (isCategoriesExpanded) {
            setVisibleCategories(6);
            setIsCategoriesExpanded(false);
        } else {
            setVisibleCategories(categoriesData.length);
            setIsCategoriesExpanded(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$DashboardLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        userType: "seeker",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-bold text-black mb-4",
                            children: "Welcome to Your Support Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 238,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-regular",
                            children: "Connect with your listeners, explore support categories, and engage with our community"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 241,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                    lineNumber: 237,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-[#FFF8B5] to-[#FFB88C] rounded-2xl flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-6 h-6 text-[#8B4513]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-black",
                                    children: "Support Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 248,
                            columnNumber: 19
                        }, this),
                        categoriesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500",
                                children: "Loading categories..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                lineNumber: 257,
                                columnNumber: 23
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 256,
                            columnNumber: 21
                        }, this) : categoriesError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-500",
                                children: categoriesError
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                lineNumber: 261,
                                columnNumber: 23
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 260,
                            columnNumber: 21
                        }, this) : categoriesData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: categoriesData.slice(0, visibleCategories).map((category)=>{
                                        const transformedCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$categoryTransform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformCategoryForCard"])(category);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transform hover:scale-105 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                category: transformedCategory,
                                                href: "/dashboard/seeker/listeners/".concat(transformedCategory.id),
                                                className: "h-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 31
                                            }, this)
                                        }, category.id, false, {
                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 29
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 23
                                }, this),
                                categoriesData.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLoadMoreCategories,
                                            className: "inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#CD853F] to-[#D2691E] text-white rounded-xl hover:from-[#D2691E] hover:to-[#CD853F] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold",
                                            children: isCategoriesExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Show Less",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-5 h-5 rotate-180 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Load More Categories",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-5 h-5 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-2",
                                            children: [
                                                "Showing ",
                                                visibleCategories,
                                                " of ",
                                                categoriesData.length,
                                                " categories"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 bg-gradient-to-br from-[#FFF8B5] to-[#FFB88C] rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-10 h-10 text-[#8B4513]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-black mb-2",
                                    children: "No Categories Available"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Categories are currently unavailable. Please try again later."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 306,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                    lineNumber: 247,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-gradient-to-br from-[#FFF8B5] to-[#FFB88C] rounded-2xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                            className: "w-6 h-6 text-[#8B4513]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-black",
                                        children: "Connected Listeners"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                lineNumber: 319,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 318,
                            columnNumber: 19
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500",
                                children: "Loading connected listeners..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                lineNumber: 335,
                                columnNumber: 23
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 334,
                            columnNumber: 21
                        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-500",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                lineNumber: 339,
                                columnNumber: 23
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 338,
                            columnNumber: 21
                        }, this) : connectedListenersData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: connectedListenersData.map((listener)=>{
                                var _listener_listener_profile, _listener_listener_profile1, _listener_listener_profile2, _listener_listener_profile3;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-[#FFF8B5]/30 to-[#FFB88C]/30 rounded-2xl p-6 border border-[#FFB88C]/20 hover:shadow-lg transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gradient-to-br from-[#CD853F] to-[#D2691E] rounded-full flex items-center justify-center text-white font-bold text-lg",
                                                    children: ((_listener_listener_profile = listener.listener_profile) === null || _listener_listener_profile === void 0 ? void 0 : _listener_listener_profile.avatar) || listener.full_name.charAt(0).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold text-black",
                                                                    children: listener.full_name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-3 h-3 rounded-full ".concat(listener.status === 'Accepted' ? 'bg-green-500' : listener.status === 'Pending' ? 'bg-yellow-500' : 'bg-gray-400')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs px-2 py-1 rounded-full font-medium ".concat(listener.status === 'Accepted' ? 'bg-green-100 text-green-700' : listener.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'),
                                                                    children: listener.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#8B4513] font-medium mb-2",
                                                            children: ((_listener_listener_profile1 = listener.listener_profile) === null || _listener_listener_profile1 === void 0 ? void 0 : _listener_listener_profile1.specialty) || 'General Support'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4 text-sm text-gray-600 mb-3",
                                                            children: [
                                                                ((_listener_listener_profile2 = listener.listener_profile) === null || _listener_listener_profile2 === void 0 ? void 0 : _listener_listener_profile2.rating) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "⭐ ",
                                                                        listener.listener_profile.rating
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 35
                                                                }, this),
                                                                ((_listener_listener_profile3 = listener.listener_profile) === null || _listener_listener_profile3 === void 0 ? void 0 : _listener_listener_profile3.experience) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "📚 ",
                                                                        listener.listener_profile.experience
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                                    lineNumber: 369,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: listener.status === 'Accepted' ? 'Ready to chat' : listener.status === 'Pending' ? 'Waiting for approval' : 'Connection required'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 mt-4",
                                            children: listener.status === 'Accepted' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleChatSelect(listener),
                                                disabled: chatLoading,
                                                className: "flex-1 px-4 py-2 bg-gradient-to-r from-[#CD853F] to-[#D2691E] text-white font-semibold rounded-xl hover:from-[#D2691E] hover:to-[#CD853F] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: chatLoading ? 'Starting Chat...' : 'Message'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 px-4 py-2 bg-gray-300 text-gray-600 font-semibold rounded-xl text-center",
                                                children: listener.status === 'Pending' ? 'Pending Approval' : 'Connection Required'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                                lineNumber: 389,
                                                columnNumber: 31
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, listener.connection_id, true, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 25
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 342,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 bg-gradient-to-br from-[#FFF8B5] to-[#FFB88C] rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-10 h-10 text-[#8B4513]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-black mb-2",
                                    children: "No Connected Listeners Yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: "Start connecting with listeners to get the support you need"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/listeners",
                                    className: "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#CD853F] to-[#D2691E] text-white font-semibold rounded-xl hover:from-[#D2691E] hover:to-[#CD853F] transition-all duration-300 transform hover:scale-105 shadow-lg",
                                    children: [
                                        "Find Listeners",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                            lineNumber: 398,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/seeker/page.tsx",
                    lineNumber: 317,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/seeker/page.tsx",
            lineNumber: 235,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/seeker/page.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
_s(SeekerDashboard, "AYw3UoRceXmiTtBz34rRRYMBOE8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SeekerDashboard;
var _c;
__turbopack_context__.k.register(_c, "SeekerDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1ad043cd._.js.map