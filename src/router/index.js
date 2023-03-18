import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },

        {
            //TODO - Remove before going to production
            path: '/formRender',
            name: 'formRender',
            component: () => import('../views/FormView.vue')
        },

        {
            // Actual
            path: '/formRender/:applicationId',
            name: 'formRender',
            component: () => import('../views/FormView.vue')
        },
        {
            path: '/adminDashboard',
            name: 'adminDashboard',
            component: () => import('../views/DashboardView.vue')
        },
        {
            path: '/subFormDashboard',
            name: 'subFormDashboard',
            component: () => import('../views/SubFormDashboard.vue')
        },
        {
            path: '/subFormBuilder',
            name: 'subFormBuilder',
            component: () => import('../views/SubFormBuilder.vue')
        },
        {
            path: '/workFlowDashboard',
            name: 'allforms',
            component: () => import('../views/AllForms.vue')
        },       
        {
          path: '/newWorkflow',
          name: 'newWorkflow',
          component: () => import('../views/NewWorkflow.vue')
        },
        {
            path: '/newWorkflow/:formUuid',
            name: 'editWorkflow',
            component: () => import('../views/NewWorkflow.vue')
        }
    ]
})

export default router
