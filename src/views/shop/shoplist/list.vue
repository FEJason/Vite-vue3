<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const { proxy } = getCurrentInstance()

// 响应式状态
const page = ref({
  current: 1,
  size: 10
})
const ruleForm = ref({})
const total = ref(0)
const tableLoading = ref(false)
const tableData = ref([])

// 获取列表数据
const getData = async () => {
  try {
    tableLoading.value = true
    let res = await proxy.$http({
      url: '/lure/api/shop/pageShop',
      method: 'post',
      data: {
        condition: {
          ...ruleForm.value
        },
        ...page.value
      }
    })
    tableData.value = res.records
    total.value = res.total
  } finally {
    tableLoading.value = false
  }
}

// 搜索
const handleSearch = () => {
  page.value.current = 1
  getData()
}

// 重置
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  page.value = {
    current: 1,
    size: 10
  }
  getData()
}

// 切换每页条数
const handleSizeChange = (val: number) => {
  page.value = {
    current: 1,
    size: val
  }
  getData()
}

// 切换页码
const handleCurrentChange = (val: number) => {
  page.value.current = val
  getData()
}

// 生命周期钩子
onMounted(() => {
  getData()
})
</script>

<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :inline="true"
      :model="ruleForm"
      class="u-p-t-20 u-p-b-20">
      <el-form-item label="编码" prop="code">
        <el-input
          v-model.trim="ruleForm.code"
          placeholder="请输入编码"
        ></el-input>
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input
          v-model.trim="ruleForm.name"
          placeholder="请输入名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select
          v-model="ruleForm.status"
          placeholder="状态"
          clearable
          @change="handleSearch"
        >
          <el-option label="正常" :value="true"> </el-option>
          <el-option label="禁用" :value="false"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch()">搜索</el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" v-loading="tableLoading">
      <el-table-column prop="name" label="店铺名" width="220">
        <template #default="scope">
          <div>{{scope.row.name}}</div>
          <div>{{scope.row.code}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" width="350" />
      <el-table-column prop="openDay" label="开业日期" />
      <el-table-column prop="openDay" label="营业时间">
        <template #default="scope">
          {{ scope.row.dayStime }} - {{ scope.row.dayEtime }}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          {{ scope.row.shopStatus == 1? '正常' : '禁用'}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220" align="center">
        <template #default>
          <el-button text type="primary" size="small" icon="Edit">编辑</el-button>
          <el-button text type="danger" size="small" icon="Delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="u-flex u-row-right u-p-t-20 u-p-b-20">
      <el-pagination
        v-model:currentPage="page.current"
        v-model:page-size="page.size"
        :page-sizes="[10, 20, 50, 100]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>