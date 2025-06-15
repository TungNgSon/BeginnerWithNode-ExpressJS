# Sử dụng Node.js image chính thức
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng ứng dụng (thường là 3000)
EXPOSE 3000

# Lệnh chạy app
CMD ["npm", "start"]
