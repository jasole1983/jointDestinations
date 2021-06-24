CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "firstName" varchar NOT NULL,
  "lastName" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "hashedPassword" varchar NOT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp NOT NULL
);

CREATE TABLE "lounge" (
  "id" int PRIMARY KEY,
  "ownerId" int,
  "title" varchar NOT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp NOT NULL
);

CREATE TABLE "herbs" (
  "id" int PRIMARY KEY,
  "userId" int,
  "loungeId" int,
  "name" varchar NOT NULL,
  "imageUrl" varchar NOT NULL,
  "content" int NOT NULL,
  "type" varchar,
  "description" text,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp NOT NULL
);

CREATE TABLE "checkin" (
  "id" int PRIMARY KEY NOT NULL,
  "userId" int,
  "herbsId" int,
  "comment" text,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp NOT NULL
);

ALTER TABLE "lounge" ADD FOREIGN KEY ("ownerId") REFERENCES "users" ("id");

ALTER TABLE "herbs" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "herbs" ADD FOREIGN KEY ("loungeId") REFERENCES "lounge" ("id");

ALTER TABLE "checkin" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "checkin" ADD FOREIGN KEY ("herbsId") REFERENCES "herbs" ("id");
