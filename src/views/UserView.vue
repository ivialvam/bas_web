<template>
    <v-container>
        <v-col cols="12" sm="8">
          <v-card class="pa-3">
            <v-card-title>User Profile</v-card-title>
            <v-card-text>
              <p>Nama: Nina</p>
              <p>Email: nina@example.com</p>
              <!-- Tambahkan detail profil lain di sini -->
            </v-card-text>
          </v-card>
        </v-col>
        
      <!-- <v-row> -->
        <v-col cols="12" sm="8">
          <v-card class="pa-3">
            <v-list>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>My Profile</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Account Security</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>e-Statement</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Limit & Payment</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>BI-FAST Setup</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>General Setting</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-btn color="red" @click="logout">Logout</v-btn>
          </v-card>
        </v-col>
        
      <!-- </v-row> -->
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    methods: {
      logout() {
        // Implementasi logout
        console.log('User logged out');
        // Tambahkan logika logout sesuai dengan kebutuhan
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan styling khusus untuk komponen ini di sini */
  </style>
  