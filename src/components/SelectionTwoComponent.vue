<template>
  <div class="member-container">
    <div class="member-details">
      <h1>BINI P-POP MEMBERS</h1>
      <div class="member-selection">
        <h2>Select Member</h2>
        <div class="member-options">
          <span v-for="member in members" :key="member.name" class="member-button" @click="changeMember(member)">
            {{ member.name }}
          </span>
        </div>
      </div>
      <div class="member-info">
        <h2 v-if="currentMember">{{ currentMember.name }}</h2>
        <p v-if="currentMember"><strong>Position:</strong> {{ currentMember.position }}</p>
        <p v-if="currentMember"><strong>Birthdate:</strong> {{ currentMember.birthdate }}</p>
        <img :src="currentMember?.image || defaultImage" :alt="currentMember?.name || 'Default Image'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: "Jhoanna",
          image: require("@/assets/Jhoanna.jpg"),
          position: "Leader, Lead Vocalist, Lead Rapper",
          birthdate: "January 26, 2004",
        },
        {
          name: "Aiah",
          image: require("@/assets/Aiah.jpg"),
          position: "Main Rapper, Sub Vocalist, Visual",
          birthdate: "January 27, 2001",
        },
        {
          name: "Colet",
          image: require("@/assets/Colet.jpg"),
          position: "Main Vocalist, Lead Dancer, Lead Rapper",
          birthdate: "September 14, 2001",
        },
        {
          name: "Maloi",
          image: require("@/assets/Maloi.jpg"),
          position: "Main Vocalist",
          birthdate: "May 27, 2002",
        },
        {
          name: "Gwen",
          image: require("@/assets/Gwen.jpg"),
          position: "Lead Vocalist, Lead Rapper",
          birthdate: "June 19, 2003",
        },
        {
          name: "Stacey",
          image: require("@/assets/Stacey.jpg"),
          position: "Main Rapper, Lead Dancer, Sub Vocalist",
          birthdate: "July 13, 2003",
        },
        {
          name: "Mikha",
          image: require("@/assets/Mikha.jpg"),
          position: "Main Rapper, Lead Dancer, Visual",
          birthdate: "November 8, 2003",
        },
        {
          name: "Sheena",
          image: require("@/assets/Sheena.jpg"),
          position: "Main Dancer, Sub Vocalist, Maknae",
          birthdate: "May 9, 2004",
        },
      ],
      currentMember: null,
      defaultImage: require("@/assets/BINI.jpg"),
    };
  },
  methods: {
    changeMember(member) {
      this.currentMember = member;
    },
  },
};
</script>

<style scoped>
.member-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: linear-gradient(135deg, #cba2dd, #e3c6f5);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 1200px;
  margin: 40px auto;
}

.member-details {
  max-width: 60%;
}

.member-details h1 {
  font-size: 2.8em;
  color: #3e157b;
  margin-bottom: 30px;
  text-align: center;
}

.member-selection {
  margin-top: 30px;
}

.member-selection h2 {
  font-size: 1.8em;
  color: #3e157b;
  margin-bottom: 20px;
  text-align: center;
}

.member-options {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.member-button {
  padding: 12px 25px;
  margin: 10px;
  cursor: pointer;
  background-color: #ffffff;
  border: 2px solid #3e157b;
  border-radius: 30px;
  color: #3e157b;
  font-size: 1.1em;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.member-button:hover {
  background-color: #d1c4e9;
  transform: translateY(-3px);
}

.member-info {
  margin-top: 40px;
  text-align: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.member-info h2 {
  font-size: 2.2em;
  color: #3e157b;
  margin-bottom: 15px;
}

.member-info p {
  font-size: 1.2em;
  color: #333;
  margin-bottom: 15px;
}

.member-info img {
  width: 300px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.member-info img:hover {
  transform: scale(1.05);
}
</style>
