// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateItem {
  count: Int!
}

type AggregateNeed {
  count: Int!
}

type AggregateParty {
  count: Int!
}

type AggregateProvider {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Item {
  id: ID!
  name: String!
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  id: ID
  name: String!
}

input ItemCreateOneInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type ItemPreviousValues {
  id: ID!
  name: String!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateDataInput {
  name: String
}

input ItemUpdateInput {
  name: String
}

input ItemUpdateManyMutationInput {
  name: String
}

input ItemUpdateOneRequiredInput {
  create: ItemCreateInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
  connect: ItemWhereUniqueInput
}

input ItemUpsertNestedInput {
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createNeed(data: NeedCreateInput!): Need!
  updateNeed(data: NeedUpdateInput!, where: NeedWhereUniqueInput!): Need
  updateManyNeeds(data: NeedUpdateManyMutationInput!, where: NeedWhereInput): BatchPayload!
  upsertNeed(where: NeedWhereUniqueInput!, create: NeedCreateInput!, update: NeedUpdateInput!): Need!
  deleteNeed(where: NeedWhereUniqueInput!): Need
  deleteManyNeeds(where: NeedWhereInput): BatchPayload!
  createParty(data: PartyCreateInput!): Party!
  updateParty(data: PartyUpdateInput!, where: PartyWhereUniqueInput!): Party
  updateManyParties(data: PartyUpdateManyMutationInput!, where: PartyWhereInput): BatchPayload!
  upsertParty(where: PartyWhereUniqueInput!, create: PartyCreateInput!, update: PartyUpdateInput!): Party!
  deleteParty(where: PartyWhereUniqueInput!): Party
  deleteManyParties(where: PartyWhereInput): BatchPayload!
  createProvider(data: ProviderCreateInput!): Provider!
  updateProvider(data: ProviderUpdateInput!, where: ProviderWhereUniqueInput!): Provider
  updateManyProviders(data: ProviderUpdateManyMutationInput!, where: ProviderWhereInput): BatchPayload!
  upsertProvider(where: ProviderWhereUniqueInput!, create: ProviderCreateInput!, update: ProviderUpdateInput!): Provider!
  deleteProvider(where: ProviderWhereUniqueInput!): Provider
  deleteManyProviders(where: ProviderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Need {
  id: ID!
  item: Item!
  quantity: Int!
  quantityUnit: String
  party: Party!
  providers(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Provider!]
  category: [String!]!
  notes: String
  priority: Priority
}

type NeedConnection {
  pageInfo: PageInfo!
  edges: [NeedEdge]!
  aggregate: AggregateNeed!
}

input NeedCreatecategoryInput {
  set: [String!]
}

input NeedCreateInput {
  id: ID
  item: ItemCreateOneInput!
  quantity: Int!
  quantityUnit: String
  party: PartyCreateOneWithoutNeedsInput!
  providers: ProviderCreateManyWithoutNeedInput
  category: NeedCreatecategoryInput
  notes: String
  priority: Priority
}

input NeedCreateManyWithoutPartyInput {
  create: [NeedCreateWithoutPartyInput!]
  connect: [NeedWhereUniqueInput!]
}

input NeedCreateOneWithoutProvidersInput {
  create: NeedCreateWithoutProvidersInput
  connect: NeedWhereUniqueInput
}

input NeedCreateWithoutPartyInput {
  id: ID
  item: ItemCreateOneInput!
  quantity: Int!
  quantityUnit: String
  providers: ProviderCreateManyWithoutNeedInput
  category: NeedCreatecategoryInput
  notes: String
  priority: Priority
}

input NeedCreateWithoutProvidersInput {
  id: ID
  item: ItemCreateOneInput!
  quantity: Int!
  quantityUnit: String
  party: PartyCreateOneWithoutNeedsInput!
  category: NeedCreatecategoryInput
  notes: String
  priority: Priority
}

type NeedEdge {
  node: Need!
  cursor: String!
}

enum NeedOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  quantityUnit_ASC
  quantityUnit_DESC
  notes_ASC
  notes_DESC
  priority_ASC
  priority_DESC
}

type NeedPreviousValues {
  id: ID!
  quantity: Int!
  quantityUnit: String
  category: [String!]!
  notes: String
  priority: Priority
}

input NeedScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  quantityUnit: String
  quantityUnit_not: String
  quantityUnit_in: [String!]
  quantityUnit_not_in: [String!]
  quantityUnit_lt: String
  quantityUnit_lte: String
  quantityUnit_gt: String
  quantityUnit_gte: String
  quantityUnit_contains: String
  quantityUnit_not_contains: String
  quantityUnit_starts_with: String
  quantityUnit_not_starts_with: String
  quantityUnit_ends_with: String
  quantityUnit_not_ends_with: String
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  priority: Priority
  priority_not: Priority
  priority_in: [Priority!]
  priority_not_in: [Priority!]
  AND: [NeedScalarWhereInput!]
  OR: [NeedScalarWhereInput!]
  NOT: [NeedScalarWhereInput!]
}

type NeedSubscriptionPayload {
  mutation: MutationType!
  node: Need
  updatedFields: [String!]
  previousValues: NeedPreviousValues
}

input NeedSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NeedWhereInput
  AND: [NeedSubscriptionWhereInput!]
  OR: [NeedSubscriptionWhereInput!]
  NOT: [NeedSubscriptionWhereInput!]
}

input NeedUpdatecategoryInput {
  set: [String!]
}

input NeedUpdateInput {
  item: ItemUpdateOneRequiredInput
  quantity: Int
  quantityUnit: String
  party: PartyUpdateOneRequiredWithoutNeedsInput
  providers: ProviderUpdateManyWithoutNeedInput
  category: NeedUpdatecategoryInput
  notes: String
  priority: Priority
}

input NeedUpdateManyDataInput {
  quantity: Int
  quantityUnit: String
  category: NeedUpdatecategoryInput
  notes: String
  priority: Priority
}

input NeedUpdateManyMutationInput {
  quantity: Int
  quantityUnit: String
  category: NeedUpdatecategoryInput
  notes: String
  priority: Priority
}

input NeedUpdateManyWithoutPartyInput {
  create: [NeedCreateWithoutPartyInput!]
  delete: [NeedWhereUniqueInput!]
  connect: [NeedWhereUniqueInput!]
  set: [NeedWhereUniqueInput!]
  disconnect: [NeedWhereUniqueInput!]
  update: [NeedUpdateWithWhereUniqueWithoutPartyInput!]
  upsert: [NeedUpsertWithWhereUniqueWithoutPartyInput!]
  deleteMany: [NeedScalarWhereInput!]
  updateMany: [NeedUpdateManyWithWhereNestedInput!]
}

input NeedUpdateManyWithWhereNestedInput {
  where: NeedScalarWhereInput!
  data: NeedUpdateManyDataInput!
}

input NeedUpdateOneRequiredWithoutProvidersInput {
  create: NeedCreateWithoutProvidersInput
  update: NeedUpdateWithoutProvidersDataInput
  upsert: NeedUpsertWithoutProvidersInput
  connect: NeedWhereUniqueInput
}

input NeedUpdateWithoutPartyDataInput {
  item: ItemUpdateOneRequiredInput
  quantity: Int
  quantityUnit: String
  providers: ProviderUpdateManyWithoutNeedInput
  category: NeedUpdatecategoryInput
  notes: String
  priority: Priority
}

input NeedUpdateWithoutProvidersDataInput {
  item: ItemUpdateOneRequiredInput
  quantity: Int
  quantityUnit: String
  party: PartyUpdateOneRequiredWithoutNeedsInput
  category: NeedUpdatecategoryInput
  notes: String
  priority: Priority
}

input NeedUpdateWithWhereUniqueWithoutPartyInput {
  where: NeedWhereUniqueInput!
  data: NeedUpdateWithoutPartyDataInput!
}

input NeedUpsertWithoutProvidersInput {
  update: NeedUpdateWithoutProvidersDataInput!
  create: NeedCreateWithoutProvidersInput!
}

input NeedUpsertWithWhereUniqueWithoutPartyInput {
  where: NeedWhereUniqueInput!
  update: NeedUpdateWithoutPartyDataInput!
  create: NeedCreateWithoutPartyInput!
}

input NeedWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  item: ItemWhereInput
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  quantityUnit: String
  quantityUnit_not: String
  quantityUnit_in: [String!]
  quantityUnit_not_in: [String!]
  quantityUnit_lt: String
  quantityUnit_lte: String
  quantityUnit_gt: String
  quantityUnit_gte: String
  quantityUnit_contains: String
  quantityUnit_not_contains: String
  quantityUnit_starts_with: String
  quantityUnit_not_starts_with: String
  quantityUnit_ends_with: String
  quantityUnit_not_ends_with: String
  party: PartyWhereInput
  providers_every: ProviderWhereInput
  providers_some: ProviderWhereInput
  providers_none: ProviderWhereInput
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  priority: Priority
  priority_not: Priority
  priority_in: [Priority!]
  priority_not_in: [Priority!]
  AND: [NeedWhereInput!]
  OR: [NeedWhereInput!]
  NOT: [NeedWhereInput!]
}

input NeedWhereUniqueInput {
  id: ID
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Party {
  id: ID!
  title: String!
  host: User!
  guests(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  date: DateTime!
  location: String!
  image: String!
  description: String!
  needs(where: NeedWhereInput, orderBy: NeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Need!]
}

type PartyConnection {
  pageInfo: PageInfo!
  edges: [PartyEdge]!
  aggregate: AggregateParty!
}

input PartyCreateInput {
  id: ID
  title: String!
  host: UserCreateOneWithoutHostOfInput!
  guests: UserCreateManyWithoutGuestOfInput
  date: DateTime!
  location: String!
  image: String!
  description: String!
  needs: NeedCreateManyWithoutPartyInput
}

input PartyCreateManyWithoutGuestsInput {
  create: [PartyCreateWithoutGuestsInput!]
  connect: [PartyWhereUniqueInput!]
}

input PartyCreateManyWithoutHostInput {
  create: [PartyCreateWithoutHostInput!]
  connect: [PartyWhereUniqueInput!]
}

input PartyCreateOneWithoutNeedsInput {
  create: PartyCreateWithoutNeedsInput
  connect: PartyWhereUniqueInput
}

input PartyCreateWithoutGuestsInput {
  id: ID
  title: String!
  host: UserCreateOneWithoutHostOfInput!
  date: DateTime!
  location: String!
  image: String!
  description: String!
  needs: NeedCreateManyWithoutPartyInput
}

input PartyCreateWithoutHostInput {
  id: ID
  title: String!
  guests: UserCreateManyWithoutGuestOfInput
  date: DateTime!
  location: String!
  image: String!
  description: String!
  needs: NeedCreateManyWithoutPartyInput
}

input PartyCreateWithoutNeedsInput {
  id: ID
  title: String!
  host: UserCreateOneWithoutHostOfInput!
  guests: UserCreateManyWithoutGuestOfInput
  date: DateTime!
  location: String!
  image: String!
  description: String!
}

type PartyEdge {
  node: Party!
  cursor: String!
}

enum PartyOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  date_ASC
  date_DESC
  location_ASC
  location_DESC
  image_ASC
  image_DESC
  description_ASC
  description_DESC
}

type PartyPreviousValues {
  id: ID!
  title: String!
  date: DateTime!
  location: String!
  image: String!
  description: String!
}

input PartyScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PartyScalarWhereInput!]
  OR: [PartyScalarWhereInput!]
  NOT: [PartyScalarWhereInput!]
}

type PartySubscriptionPayload {
  mutation: MutationType!
  node: Party
  updatedFields: [String!]
  previousValues: PartyPreviousValues
}

input PartySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartyWhereInput
  AND: [PartySubscriptionWhereInput!]
  OR: [PartySubscriptionWhereInput!]
  NOT: [PartySubscriptionWhereInput!]
}

input PartyUpdateInput {
  title: String
  host: UserUpdateOneRequiredWithoutHostOfInput
  guests: UserUpdateManyWithoutGuestOfInput
  date: DateTime
  location: String
  image: String
  description: String
  needs: NeedUpdateManyWithoutPartyInput
}

input PartyUpdateManyDataInput {
  title: String
  date: DateTime
  location: String
  image: String
  description: String
}

input PartyUpdateManyMutationInput {
  title: String
  date: DateTime
  location: String
  image: String
  description: String
}

input PartyUpdateManyWithoutGuestsInput {
  create: [PartyCreateWithoutGuestsInput!]
  delete: [PartyWhereUniqueInput!]
  connect: [PartyWhereUniqueInput!]
  set: [PartyWhereUniqueInput!]
  disconnect: [PartyWhereUniqueInput!]
  update: [PartyUpdateWithWhereUniqueWithoutGuestsInput!]
  upsert: [PartyUpsertWithWhereUniqueWithoutGuestsInput!]
  deleteMany: [PartyScalarWhereInput!]
  updateMany: [PartyUpdateManyWithWhereNestedInput!]
}

input PartyUpdateManyWithoutHostInput {
  create: [PartyCreateWithoutHostInput!]
  delete: [PartyWhereUniqueInput!]
  connect: [PartyWhereUniqueInput!]
  set: [PartyWhereUniqueInput!]
  disconnect: [PartyWhereUniqueInput!]
  update: [PartyUpdateWithWhereUniqueWithoutHostInput!]
  upsert: [PartyUpsertWithWhereUniqueWithoutHostInput!]
  deleteMany: [PartyScalarWhereInput!]
  updateMany: [PartyUpdateManyWithWhereNestedInput!]
}

input PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput!
  data: PartyUpdateManyDataInput!
}

input PartyUpdateOneRequiredWithoutNeedsInput {
  create: PartyCreateWithoutNeedsInput
  update: PartyUpdateWithoutNeedsDataInput
  upsert: PartyUpsertWithoutNeedsInput
  connect: PartyWhereUniqueInput
}

input PartyUpdateWithoutGuestsDataInput {
  title: String
  host: UserUpdateOneRequiredWithoutHostOfInput
  date: DateTime
  location: String
  image: String
  description: String
  needs: NeedUpdateManyWithoutPartyInput
}

input PartyUpdateWithoutHostDataInput {
  title: String
  guests: UserUpdateManyWithoutGuestOfInput
  date: DateTime
  location: String
  image: String
  description: String
  needs: NeedUpdateManyWithoutPartyInput
}

input PartyUpdateWithoutNeedsDataInput {
  title: String
  host: UserUpdateOneRequiredWithoutHostOfInput
  guests: UserUpdateManyWithoutGuestOfInput
  date: DateTime
  location: String
  image: String
  description: String
}

input PartyUpdateWithWhereUniqueWithoutGuestsInput {
  where: PartyWhereUniqueInput!
  data: PartyUpdateWithoutGuestsDataInput!
}

input PartyUpdateWithWhereUniqueWithoutHostInput {
  where: PartyWhereUniqueInput!
  data: PartyUpdateWithoutHostDataInput!
}

input PartyUpsertWithoutNeedsInput {
  update: PartyUpdateWithoutNeedsDataInput!
  create: PartyCreateWithoutNeedsInput!
}

input PartyUpsertWithWhereUniqueWithoutGuestsInput {
  where: PartyWhereUniqueInput!
  update: PartyUpdateWithoutGuestsDataInput!
  create: PartyCreateWithoutGuestsInput!
}

input PartyUpsertWithWhereUniqueWithoutHostInput {
  where: PartyWhereUniqueInput!
  update: PartyUpdateWithoutHostDataInput!
  create: PartyCreateWithoutHostInput!
}

input PartyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  host: UserWhereInput
  guests_every: UserWhereInput
  guests_some: UserWhereInput
  guests_none: UserWhereInput
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  needs_every: NeedWhereInput
  needs_some: NeedWhereInput
  needs_none: NeedWhereInput
  AND: [PartyWhereInput!]
  OR: [PartyWhereInput!]
  NOT: [PartyWhereInput!]
}

input PartyWhereUniqueInput {
  id: ID
}

enum Priority {
  Low
  Medium
  High
}

type Provider {
  id: ID!
  quantity: Int!
  user: User!
  need: Need!
}

type ProviderConnection {
  pageInfo: PageInfo!
  edges: [ProviderEdge]!
  aggregate: AggregateProvider!
}

input ProviderCreateInput {
  id: ID
  quantity: Int!
  user: UserCreateOneInput!
  need: NeedCreateOneWithoutProvidersInput!
}

input ProviderCreateManyWithoutNeedInput {
  create: [ProviderCreateWithoutNeedInput!]
  connect: [ProviderWhereUniqueInput!]
}

input ProviderCreateWithoutNeedInput {
  id: ID
  quantity: Int!
  user: UserCreateOneInput!
}

type ProviderEdge {
  node: Provider!
  cursor: String!
}

enum ProviderOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
}

type ProviderPreviousValues {
  id: ID!
  quantity: Int!
}

input ProviderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [ProviderScalarWhereInput!]
  OR: [ProviderScalarWhereInput!]
  NOT: [ProviderScalarWhereInput!]
}

type ProviderSubscriptionPayload {
  mutation: MutationType!
  node: Provider
  updatedFields: [String!]
  previousValues: ProviderPreviousValues
}

input ProviderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProviderWhereInput
  AND: [ProviderSubscriptionWhereInput!]
  OR: [ProviderSubscriptionWhereInput!]
  NOT: [ProviderSubscriptionWhereInput!]
}

input ProviderUpdateInput {
  quantity: Int
  user: UserUpdateOneRequiredInput
  need: NeedUpdateOneRequiredWithoutProvidersInput
}

input ProviderUpdateManyDataInput {
  quantity: Int
}

input ProviderUpdateManyMutationInput {
  quantity: Int
}

input ProviderUpdateManyWithoutNeedInput {
  create: [ProviderCreateWithoutNeedInput!]
  delete: [ProviderWhereUniqueInput!]
  connect: [ProviderWhereUniqueInput!]
  set: [ProviderWhereUniqueInput!]
  disconnect: [ProviderWhereUniqueInput!]
  update: [ProviderUpdateWithWhereUniqueWithoutNeedInput!]
  upsert: [ProviderUpsertWithWhereUniqueWithoutNeedInput!]
  deleteMany: [ProviderScalarWhereInput!]
  updateMany: [ProviderUpdateManyWithWhereNestedInput!]
}

input ProviderUpdateManyWithWhereNestedInput {
  where: ProviderScalarWhereInput!
  data: ProviderUpdateManyDataInput!
}

input ProviderUpdateWithoutNeedDataInput {
  quantity: Int
  user: UserUpdateOneRequiredInput
}

input ProviderUpdateWithWhereUniqueWithoutNeedInput {
  where: ProviderWhereUniqueInput!
  data: ProviderUpdateWithoutNeedDataInput!
}

input ProviderUpsertWithWhereUniqueWithoutNeedInput {
  where: ProviderWhereUniqueInput!
  update: ProviderUpdateWithoutNeedDataInput!
  create: ProviderCreateWithoutNeedInput!
}

input ProviderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  user: UserWhereInput
  need: NeedWhereInput
  AND: [ProviderWhereInput!]
  OR: [ProviderWhereInput!]
  NOT: [ProviderWhereInput!]
}

input ProviderWhereUniqueInput {
  id: ID
}

type Query {
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  need(where: NeedWhereUniqueInput!): Need
  needs(where: NeedWhereInput, orderBy: NeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Need]!
  needsConnection(where: NeedWhereInput, orderBy: NeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NeedConnection!
  party(where: PartyWhereUniqueInput!): Party
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party]!
  partiesConnection(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyConnection!
  provider(where: ProviderWhereUniqueInput!): Provider
  providers(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Provider]!
  providersConnection(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProviderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  need(where: NeedSubscriptionWhereInput): NeedSubscriptionPayload
  party(where: PartySubscriptionWhereInput): PartySubscriptionPayload
  provider(where: ProviderSubscriptionWhereInput): ProviderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  image: String
  hostOf(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party!]
  guestOf(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  image: String
  hostOf: PartyCreateManyWithoutHostInput
  guestOf: PartyCreateManyWithoutGuestsInput
}

input UserCreateManyWithoutGuestOfInput {
  create: [UserCreateWithoutGuestOfInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutHostOfInput {
  create: UserCreateWithoutHostOfInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutGuestOfInput {
  id: ID
  name: String!
  email: String!
  password: String!
  image: String
  hostOf: PartyCreateManyWithoutHostInput
}

input UserCreateWithoutHostOfInput {
  id: ID
  name: String!
  email: String!
  password: String!
  image: String
  guestOf: PartyCreateManyWithoutGuestsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  image_ASC
  image_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  image: String
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  image: String
  hostOf: PartyUpdateManyWithoutHostInput
  guestOf: PartyUpdateManyWithoutGuestsInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  image: String
  hostOf: PartyUpdateManyWithoutHostInput
  guestOf: PartyUpdateManyWithoutGuestsInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
  password: String
  image: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  image: String
}

input UserUpdateManyWithoutGuestOfInput {
  create: [UserCreateWithoutGuestOfInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutGuestOfInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutGuestOfInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutHostOfInput {
  create: UserCreateWithoutHostOfInput
  update: UserUpdateWithoutHostOfDataInput
  upsert: UserUpsertWithoutHostOfInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutGuestOfDataInput {
  name: String
  email: String
  password: String
  image: String
  hostOf: PartyUpdateManyWithoutHostInput
}

input UserUpdateWithoutHostOfDataInput {
  name: String
  email: String
  password: String
  image: String
  guestOf: PartyUpdateManyWithoutGuestsInput
}

input UserUpdateWithWhereUniqueWithoutGuestOfInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutGuestOfDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutHostOfInput {
  update: UserUpdateWithoutHostOfDataInput!
  create: UserCreateWithoutHostOfInput!
}

input UserUpsertWithWhereUniqueWithoutGuestOfInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutGuestOfDataInput!
  create: UserCreateWithoutGuestOfInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  hostOf_every: PartyWhereInput
  hostOf_some: PartyWhereInput
  hostOf_none: PartyWhereInput
  guestOf_every: PartyWhereInput
  guestOf_some: PartyWhereInput
  guestOf_none: PartyWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`