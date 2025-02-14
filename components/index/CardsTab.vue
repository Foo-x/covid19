<template>
  <v-tabs ref="tabs" v-model="tab" hide-slider>
    <v-tab
      v-for="(item, i) in items"
      :id="`cardTab-${i}`"
      :key="i"
      v-ripple="false"
      :to="{ path: localePath(item.path) }"
      nuxt
      exact-path
      @click="change"
    >
      <v-icon class="TabIcon">{{ mdiChartTimelineVariant }}</v-icon>
      {{ item.label }}
    </v-tab>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item
        v-for="(item, i) in items"
        :key="i"
        :value="localePath(item.path)"
      >
        <lazy-component :is="item.component" />
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script lang="ts">
import { mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'

import { EventBus, TOGGLE_EVENT } from '@/utils/tab-event-bus'

const CardsFeatured = () => import('@/components/index/CardsFeatured.vue')
const CardsMonitoring = () => import('@/components/index/CardsMonitoring.vue')
const CardsReference = () => import('@/components/index/CardsReference.vue')

export default Vue.extend({
  components: {
    CardsFeatured,
    CardsMonitoring,
    CardsReference,
  },
  data() {
    return {
      tab: null,
      items: [
        {
          label: this.$t('注目の指標'),
          component: CardsFeatured,
          path: '/',
        },
        {
          label: this.$t('モニタリング項目'),
          component: CardsMonitoring,
          path: '/monitoring',
        },
        {
          label: this.$t('その他 参考指標'),
          component: CardsReference,
          path: '/reference',
        },
      ],
      mdiChartTimelineVariant,
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      const tabs = this.$refs.tabs as Vue
      if (tabs) {
        const tabsElement = tabs.$el
        const tabDiv = tabsElement.querySelectorAll('div')
        tabDiv[0].removeAttribute('role')
        const tabItems = tabsElement.querySelectorAll('a')
        const nodes = Array.prototype.slice.call(tabItems, 0)
        nodes.forEach((tabItem: HTMLElement) => {
          tabItem.removeAttribute('role')
          tabItem.removeAttribute('aria-selected')
        })
      }
    })
  },
  methods: {
    change() {
      EventBus.$emit(TOGGLE_EVENT)
    },
  },
})
</script>

<style lang="scss">
.v-slide-group__content {
  border-bottom: 1px solid $gray-2;
  background: $gray-5;
}

.v-tabs {
  min-height: 100vh;
}

.v-tab {
  top: 1px;
  margin: 0 8px;
  border-style: solid;
  border-radius: 4px 4px 0 0;
  font-weight: 600 !important;

  @include font-size(16, true);

  &:focus {
    outline: 2px solid $focus;
  }

  &--active {
    color: $gray-2 !important;
    background: $gray-5;
    border-color: $gray-2 $gray-2 $gray-5 $gray-2;
    border-width: 1px 1px 2px;

    &::before {
      background-color: transparent;
    }
  }

  .TabIcon {
    transition: none;
  }

  &:not(.v-tab--active) {
    color: $green-1 !important;
    background: $white;
    border-color: $green-1 $green-1 $gray-2 $green-1;
    border-width: 1px;

    &:hover {
      color: $white !important;
      background: $green-1;
    }

    .TabIcon {
      color: inherit !important;
    }
  }
}

.v-tabs-items {
  background-color: transparent !important;
}

@function px2vw($px, $vw: 768) {
  @return $px / $vw * 100vw;
}

@include lessThan(900) {
  .v-slide-group__content {
    width: 100%;
  }

  .v-tab {
    font-size: px2vw(14) !important;
    font-weight: normal !important;
    flex: 1 1 auto;
    width: 100%;
    padding: 0 8px !important;
    margin: 0 6px;
  }
}

@include lessThan($small) {
  .v-tab {
    font-size: px2vw(16, 600) !important;
    padding: 0 4px !important;
    margin: 0 4px;
  }

  .TabIcon {
    font-size: px2vw(16, 600) !important;

    .v-icon__svg {
      width: px2vw(16, 600) !important;
      height: px2vw(16, 600) !important;
    }
  }
}
</style>
