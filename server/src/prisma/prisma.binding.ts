import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    parties: <T = Array<Party | null>>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    needs: <T = Array<Need | null>>(args: { where?: NeedWhereInput | null, orderBy?: NeedOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    providers: <T = Array<Provider | null>>(args: { where?: ProviderWhereInput | null, orderBy?: ProviderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Array<Item | null>>(args: { where?: ItemWhereInput | null, orderBy?: ItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    party: <T = Party | null>(args: { where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    need: <T = Need | null>(args: { where: NeedWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    provider: <T = Provider | null>(args: { where: ProviderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    item: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    partiesConnection: <T = PartyConnection>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    needsConnection: <T = NeedConnection>(args: { where?: NeedWhereInput | null, orderBy?: NeedOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    providersConnection: <T = ProviderConnection>(args: { where?: ProviderWhereInput | null, orderBy?: ProviderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemsConnection: <T = ItemConnection>(args: { where?: ItemWhereInput | null, orderBy?: ItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createParty: <T = Party>(args: { data: PartyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNeed: <T = Need>(args: { data: NeedCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProvider: <T = Provider>(args: { data: ProviderCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateParty: <T = Party | null>(args: { data: PartyUpdateInput, where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNeed: <T = Need | null>(args: { data: NeedUpdateInput, where: NeedWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateProvider: <T = Provider | null>(args: { data: ProviderUpdateInput, where: ProviderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateItem: <T = Item | null>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteParty: <T = Party | null>(args: { where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNeed: <T = Need | null>(args: { where: NeedWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProvider: <T = Provider | null>(args: { where: ProviderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteItem: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertParty: <T = Party>(args: { where: PartyWhereUniqueInput, create: PartyCreateInput, update: PartyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNeed: <T = Need>(args: { where: NeedWhereUniqueInput, create: NeedCreateInput, update: NeedUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProvider: <T = Provider>(args: { where: ProviderWhereUniqueInput, create: ProviderCreateInput, update: ProviderUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItem: <T = Item>(args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyParties: <T = BatchPayload>(args: { data: PartyUpdateManyMutationInput, where?: PartyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNeeds: <T = BatchPayload>(args: { data: NeedUpdateManyMutationInput, where?: NeedWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProviders: <T = BatchPayload>(args: { data: ProviderUpdateManyMutationInput, where?: ProviderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItems: <T = BatchPayload>(args: { data: ItemUpdateManyMutationInput, where?: ItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyParties: <T = BatchPayload>(args: { where?: PartyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNeeds: <T = BatchPayload>(args: { where?: NeedWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProviders: <T = BatchPayload>(args: { where?: ProviderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItems: <T = BatchPayload>(args: { where?: ItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    party: <T = PartySubscriptionPayload | null>(args: { where?: PartySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    need: <T = NeedSubscriptionPayload | null>(args: { where?: NeedSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    provider: <T = ProviderSubscriptionPayload | null>(args: { where?: ProviderSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    item: <T = ItemSubscriptionPayload | null>(args: { where?: ItemSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Party: (where?: PartyWhereInput) => Promise<boolean>
  Need: (where?: NeedWhereInput) => Promise<boolean>
  Provider: (where?: ProviderWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateItem {
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
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Item implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
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
  connect: ItemWhereUniqueInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
}

input ItemUpsertNestedInput {
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input ItemWhereUniqueInput {
  id: ID
}

"""Raw JSON value"""
scalar Json

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createParty(data: PartyCreateInput!): Party!
  createNeed(data: NeedCreateInput!): Need!
  createProvider(data: ProviderCreateInput!): Provider!
  createUser(data: UserCreateInput!): User!
  createItem(data: ItemCreateInput!): Item!
  updateParty(data: PartyUpdateInput!, where: PartyWhereUniqueInput!): Party
  updateNeed(data: NeedUpdateInput!, where: NeedWhereUniqueInput!): Need
  updateProvider(data: ProviderUpdateInput!, where: ProviderWhereUniqueInput!): Provider
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  deleteParty(where: PartyWhereUniqueInput!): Party
  deleteNeed(where: NeedWhereUniqueInput!): Need
  deleteProvider(where: ProviderWhereUniqueInput!): Provider
  deleteUser(where: UserWhereUniqueInput!): User
  deleteItem(where: ItemWhereUniqueInput!): Item
  upsertParty(where: PartyWhereUniqueInput!, create: PartyCreateInput!, update: PartyUpdateInput!): Party!
  upsertNeed(where: NeedWhereUniqueInput!, create: NeedCreateInput!, update: NeedUpdateInput!): Need!
  upsertProvider(where: ProviderWhereUniqueInput!, create: ProviderCreateInput!, update: ProviderUpdateInput!): Provider!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  updateManyParties(data: PartyUpdateManyMutationInput!, where: PartyWhereInput): BatchPayload!
  updateManyNeeds(data: NeedUpdateManyMutationInput!, where: NeedWhereInput): BatchPayload!
  updateManyProviders(data: ProviderUpdateManyMutationInput!, where: ProviderWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  deleteManyParties(where: PartyWhereInput): BatchPayload!
  deleteManyNeeds(where: NeedWhereInput): BatchPayload!
  deleteManyProviders(where: ProviderWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Need implements Node {
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

"""A connection to a list of items."""
type NeedConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NeedEdge]!
  aggregate: AggregateNeed!
}

input NeedCreatecategoryInput {
  set: [String!]
}

input NeedCreateInput {
  id: ID
  quantity: Int!
  quantityUnit: String
  notes: String
  priority: Priority
  category: NeedCreatecategoryInput
  item: ItemCreateOneInput!
  party: PartyCreateOneWithoutNeedsInput!
  providers: ProviderCreateManyWithoutNeedInput
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
  quantity: Int!
  quantityUnit: String
  notes: String
  priority: Priority
  category: NeedCreatecategoryInput
  item: ItemCreateOneInput!
  providers: ProviderCreateManyWithoutNeedInput
}

input NeedCreateWithoutProvidersInput {
  id: ID
  quantity: Int!
  quantityUnit: String
  notes: String
  priority: Priority
  category: NeedCreatecategoryInput
  item: ItemCreateOneInput!
  party: PartyCreateOneWithoutNeedsInput!
}

"""An edge in a connection."""
type NeedEdge {
  """The item at the end of the edge."""
  node: Need!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [NeedScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [NeedScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NeedScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  quantityUnit: String

  """All values that are not equal to given value."""
  quantityUnit_not: String

  """All values that are contained in given list."""
  quantityUnit_in: [String!]

  """All values that are not contained in given list."""
  quantityUnit_not_in: [String!]

  """All values less than the given value."""
  quantityUnit_lt: String

  """All values less than or equal the given value."""
  quantityUnit_lte: String

  """All values greater than the given value."""
  quantityUnit_gt: String

  """All values greater than or equal the given value."""
  quantityUnit_gte: String

  """All values containing the given string."""
  quantityUnit_contains: String

  """All values not containing the given string."""
  quantityUnit_not_contains: String

  """All values starting with the given string."""
  quantityUnit_starts_with: String

  """All values not starting with the given string."""
  quantityUnit_not_starts_with: String

  """All values ending with the given string."""
  quantityUnit_ends_with: String

  """All values not ending with the given string."""
  quantityUnit_not_ends_with: String
  notes: String

  """All values that are not equal to given value."""
  notes_not: String

  """All values that are contained in given list."""
  notes_in: [String!]

  """All values that are not contained in given list."""
  notes_not_in: [String!]

  """All values less than the given value."""
  notes_lt: String

  """All values less than or equal the given value."""
  notes_lte: String

  """All values greater than the given value."""
  notes_gt: String

  """All values greater than or equal the given value."""
  notes_gte: String

  """All values containing the given string."""
  notes_contains: String

  """All values not containing the given string."""
  notes_not_contains: String

  """All values starting with the given string."""
  notes_starts_with: String

  """All values not starting with the given string."""
  notes_not_starts_with: String

  """All values ending with the given string."""
  notes_ends_with: String

  """All values not ending with the given string."""
  notes_not_ends_with: String
  priority: Priority

  """All values that are not equal to given value."""
  priority_not: Priority

  """All values that are contained in given list."""
  priority_in: [Priority!]

  """All values that are not contained in given list."""
  priority_not_in: [Priority!]
}

type NeedSubscriptionPayload {
  mutation: MutationType!
  node: Need
  updatedFields: [String!]
  previousValues: NeedPreviousValues
}

input NeedSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NeedSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NeedSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NeedSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NeedWhereInput
}

input NeedUpdatecategoryInput {
  set: [String!]
}

input NeedUpdateInput {
  quantity: Int
  quantityUnit: String
  notes: String
  priority: Priority
  category: NeedUpdatecategoryInput
  item: ItemUpdateOneRequiredInput
  party: PartyUpdateOneRequiredWithoutNeedsInput
  providers: ProviderUpdateManyWithoutNeedInput
}

input NeedUpdateManyDataInput {
  quantity: Int
  quantityUnit: String
  notes: String
  priority: Priority
  category: NeedUpdatecategoryInput
}

input NeedUpdateManyMutationInput {
  quantity: Int
  quantityUnit: String
  notes: String
  priority: Priority
  category: NeedUpdatecategoryInput
}

input NeedUpdateManyWithoutPartyInput {
  create: [NeedCreateWithoutPartyInput!]
  connect: [NeedWhereUniqueInput!]
  set: [NeedWhereUniqueInput!]
  disconnect: [NeedWhereUniqueInput!]
  delete: [NeedWhereUniqueInput!]
  update: [NeedUpdateWithWhereUniqueWithoutPartyInput!]
  updateMany: [NeedUpdateManyWithWhereNestedInput!]
  deleteMany: [NeedScalarWhereInput!]
  upsert: [NeedUpsertWithWhereUniqueWithoutPartyInput!]
}

input NeedUpdateManyWithWhereNestedInput {
  where: NeedScalarWhereInput!
  data: NeedUpdateManyDataInput!
}

input NeedUpdateOneRequiredWithoutProvidersInput {
  create: NeedCreateWithoutProvidersInput
  connect: NeedWhereUniqueInput
  update: NeedUpdateWithoutProvidersDataInput
  upsert: NeedUpsertWithoutProvidersInput
}

input NeedUpdateWithoutPartyDataInput {
  quantity: Int
  quantityUnit: String
  notes: String
  priority: Priority
  category: NeedUpdatecategoryInput
  item: ItemUpdateOneRequiredInput
  providers: ProviderUpdateManyWithoutNeedInput
}

input NeedUpdateWithoutProvidersDataInput {
  quantity: Int
  quantityUnit: String
  notes: String
  priority: Priority
  category: NeedUpdatecategoryInput
  item: ItemUpdateOneRequiredInput
  party: PartyUpdateOneRequiredWithoutNeedsInput
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
  """Logical AND on all given filters."""
  AND: [NeedWhereInput!]

  """Logical OR on all given filters."""
  OR: [NeedWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NeedWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  quantityUnit: String

  """All values that are not equal to given value."""
  quantityUnit_not: String

  """All values that are contained in given list."""
  quantityUnit_in: [String!]

  """All values that are not contained in given list."""
  quantityUnit_not_in: [String!]

  """All values less than the given value."""
  quantityUnit_lt: String

  """All values less than or equal the given value."""
  quantityUnit_lte: String

  """All values greater than the given value."""
  quantityUnit_gt: String

  """All values greater than or equal the given value."""
  quantityUnit_gte: String

  """All values containing the given string."""
  quantityUnit_contains: String

  """All values not containing the given string."""
  quantityUnit_not_contains: String

  """All values starting with the given string."""
  quantityUnit_starts_with: String

  """All values not starting with the given string."""
  quantityUnit_not_starts_with: String

  """All values ending with the given string."""
  quantityUnit_ends_with: String

  """All values not ending with the given string."""
  quantityUnit_not_ends_with: String
  notes: String

  """All values that are not equal to given value."""
  notes_not: String

  """All values that are contained in given list."""
  notes_in: [String!]

  """All values that are not contained in given list."""
  notes_not_in: [String!]

  """All values less than the given value."""
  notes_lt: String

  """All values less than or equal the given value."""
  notes_lte: String

  """All values greater than the given value."""
  notes_gt: String

  """All values greater than or equal the given value."""
  notes_gte: String

  """All values containing the given string."""
  notes_contains: String

  """All values not containing the given string."""
  notes_not_contains: String

  """All values starting with the given string."""
  notes_starts_with: String

  """All values not starting with the given string."""
  notes_not_starts_with: String

  """All values ending with the given string."""
  notes_ends_with: String

  """All values not ending with the given string."""
  notes_not_ends_with: String
  priority: Priority

  """All values that are not equal to given value."""
  priority_not: Priority

  """All values that are contained in given list."""
  priority_in: [Priority!]

  """All values that are not contained in given list."""
  priority_not_in: [Priority!]
  item: ItemWhereInput
  party: PartyWhereInput
  providers_every: ProviderWhereInput
  providers_some: ProviderWhereInput
  providers_none: ProviderWhereInput
}

input NeedWhereUniqueInput {
  id: ID
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Party implements Node {
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

"""A connection to a list of items."""
type PartyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PartyEdge]!
  aggregate: AggregateParty!
}

input PartyCreateInput {
  id: ID
  title: String!
  date: DateTime!
  location: String!
  image: String!
  description: String!
  host: UserCreateOneWithoutHostOfInput!
  guests: UserCreateManyWithoutGuestOfInput
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
  date: DateTime!
  location: String!
  image: String!
  description: String!
  host: UserCreateOneWithoutHostOfInput!
  needs: NeedCreateManyWithoutPartyInput
}

input PartyCreateWithoutHostInput {
  id: ID
  title: String!
  date: DateTime!
  location: String!
  image: String!
  description: String!
  guests: UserCreateManyWithoutGuestOfInput
  needs: NeedCreateManyWithoutPartyInput
}

input PartyCreateWithoutNeedsInput {
  id: ID
  title: String!
  date: DateTime!
  location: String!
  image: String!
  description: String!
  host: UserCreateOneWithoutHostOfInput!
  guests: UserCreateManyWithoutGuestOfInput
}

"""An edge in a connection."""
type PartyEdge {
  """The item at the end of the edge."""
  node: Party!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [PartyScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PartyScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PartyScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  date: DateTime

  """All values that are not equal to given value."""
  date_not: DateTime

  """All values that are contained in given list."""
  date_in: [DateTime!]

  """All values that are not contained in given list."""
  date_not_in: [DateTime!]

  """All values less than the given value."""
  date_lt: DateTime

  """All values less than or equal the given value."""
  date_lte: DateTime

  """All values greater than the given value."""
  date_gt: DateTime

  """All values greater than or equal the given value."""
  date_gte: DateTime
  location: String

  """All values that are not equal to given value."""
  location_not: String

  """All values that are contained in given list."""
  location_in: [String!]

  """All values that are not contained in given list."""
  location_not_in: [String!]

  """All values less than the given value."""
  location_lt: String

  """All values less than or equal the given value."""
  location_lte: String

  """All values greater than the given value."""
  location_gt: String

  """All values greater than or equal the given value."""
  location_gte: String

  """All values containing the given string."""
  location_contains: String

  """All values not containing the given string."""
  location_not_contains: String

  """All values starting with the given string."""
  location_starts_with: String

  """All values not starting with the given string."""
  location_not_starts_with: String

  """All values ending with the given string."""
  location_ends_with: String

  """All values not ending with the given string."""
  location_not_ends_with: String
  image: String

  """All values that are not equal to given value."""
  image_not: String

  """All values that are contained in given list."""
  image_in: [String!]

  """All values that are not contained in given list."""
  image_not_in: [String!]

  """All values less than the given value."""
  image_lt: String

  """All values less than or equal the given value."""
  image_lte: String

  """All values greater than the given value."""
  image_gt: String

  """All values greater than or equal the given value."""
  image_gte: String

  """All values containing the given string."""
  image_contains: String

  """All values not containing the given string."""
  image_not_contains: String

  """All values starting with the given string."""
  image_starts_with: String

  """All values not starting with the given string."""
  image_not_starts_with: String

  """All values ending with the given string."""
  image_ends_with: String

  """All values not ending with the given string."""
  image_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

type PartySubscriptionPayload {
  mutation: MutationType!
  node: Party
  updatedFields: [String!]
  previousValues: PartyPreviousValues
}

input PartySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PartySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PartySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PartySubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PartyWhereInput
}

input PartyUpdateInput {
  title: String
  date: DateTime
  location: String
  image: String
  description: String
  host: UserUpdateOneRequiredWithoutHostOfInput
  guests: UserUpdateManyWithoutGuestOfInput
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
  connect: [PartyWhereUniqueInput!]
  set: [PartyWhereUniqueInput!]
  disconnect: [PartyWhereUniqueInput!]
  delete: [PartyWhereUniqueInput!]
  update: [PartyUpdateWithWhereUniqueWithoutGuestsInput!]
  updateMany: [PartyUpdateManyWithWhereNestedInput!]
  deleteMany: [PartyScalarWhereInput!]
  upsert: [PartyUpsertWithWhereUniqueWithoutGuestsInput!]
}

input PartyUpdateManyWithoutHostInput {
  create: [PartyCreateWithoutHostInput!]
  connect: [PartyWhereUniqueInput!]
  set: [PartyWhereUniqueInput!]
  disconnect: [PartyWhereUniqueInput!]
  delete: [PartyWhereUniqueInput!]
  update: [PartyUpdateWithWhereUniqueWithoutHostInput!]
  updateMany: [PartyUpdateManyWithWhereNestedInput!]
  deleteMany: [PartyScalarWhereInput!]
  upsert: [PartyUpsertWithWhereUniqueWithoutHostInput!]
}

input PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput!
  data: PartyUpdateManyDataInput!
}

input PartyUpdateOneRequiredWithoutNeedsInput {
  create: PartyCreateWithoutNeedsInput
  connect: PartyWhereUniqueInput
  update: PartyUpdateWithoutNeedsDataInput
  upsert: PartyUpsertWithoutNeedsInput
}

input PartyUpdateWithoutGuestsDataInput {
  title: String
  date: DateTime
  location: String
  image: String
  description: String
  host: UserUpdateOneRequiredWithoutHostOfInput
  needs: NeedUpdateManyWithoutPartyInput
}

input PartyUpdateWithoutHostDataInput {
  title: String
  date: DateTime
  location: String
  image: String
  description: String
  guests: UserUpdateManyWithoutGuestOfInput
  needs: NeedUpdateManyWithoutPartyInput
}

input PartyUpdateWithoutNeedsDataInput {
  title: String
  date: DateTime
  location: String
  image: String
  description: String
  host: UserUpdateOneRequiredWithoutHostOfInput
  guests: UserUpdateManyWithoutGuestOfInput
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
  """Logical AND on all given filters."""
  AND: [PartyWhereInput!]

  """Logical OR on all given filters."""
  OR: [PartyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PartyWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  date: DateTime

  """All values that are not equal to given value."""
  date_not: DateTime

  """All values that are contained in given list."""
  date_in: [DateTime!]

  """All values that are not contained in given list."""
  date_not_in: [DateTime!]

  """All values less than the given value."""
  date_lt: DateTime

  """All values less than or equal the given value."""
  date_lte: DateTime

  """All values greater than the given value."""
  date_gt: DateTime

  """All values greater than or equal the given value."""
  date_gte: DateTime
  location: String

  """All values that are not equal to given value."""
  location_not: String

  """All values that are contained in given list."""
  location_in: [String!]

  """All values that are not contained in given list."""
  location_not_in: [String!]

  """All values less than the given value."""
  location_lt: String

  """All values less than or equal the given value."""
  location_lte: String

  """All values greater than the given value."""
  location_gt: String

  """All values greater than or equal the given value."""
  location_gte: String

  """All values containing the given string."""
  location_contains: String

  """All values not containing the given string."""
  location_not_contains: String

  """All values starting with the given string."""
  location_starts_with: String

  """All values not starting with the given string."""
  location_not_starts_with: String

  """All values ending with the given string."""
  location_ends_with: String

  """All values not ending with the given string."""
  location_not_ends_with: String
  image: String

  """All values that are not equal to given value."""
  image_not: String

  """All values that are contained in given list."""
  image_in: [String!]

  """All values that are not contained in given list."""
  image_not_in: [String!]

  """All values less than the given value."""
  image_lt: String

  """All values less than or equal the given value."""
  image_lte: String

  """All values greater than the given value."""
  image_gt: String

  """All values greater than or equal the given value."""
  image_gte: String

  """All values containing the given string."""
  image_contains: String

  """All values not containing the given string."""
  image_not_contains: String

  """All values starting with the given string."""
  image_starts_with: String

  """All values not starting with the given string."""
  image_not_starts_with: String

  """All values ending with the given string."""
  image_ends_with: String

  """All values not ending with the given string."""
  image_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  host: UserWhereInput
  guests_every: UserWhereInput
  guests_some: UserWhereInput
  guests_none: UserWhereInput
  needs_every: NeedWhereInput
  needs_some: NeedWhereInput
  needs_none: NeedWhereInput
}

input PartyWhereUniqueInput {
  id: ID
}

enum Priority {
  Low
  Medium
  High
}

enum PrismaDatabase {
  default
}

type Provider implements Node {
  id: ID!
  quantity: Int!
  user: User!
  need: Need!
}

"""A connection to a list of items."""
type ProviderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type ProviderEdge {
  """The item at the end of the edge."""
  node: Provider!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ProviderScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProviderScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProviderScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
}

type ProviderSubscriptionPayload {
  mutation: MutationType!
  node: Provider
  updatedFields: [String!]
  previousValues: ProviderPreviousValues
}

input ProviderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProviderSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProviderSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProviderSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProviderWhereInput
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
  connect: [ProviderWhereUniqueInput!]
  set: [ProviderWhereUniqueInput!]
  disconnect: [ProviderWhereUniqueInput!]
  delete: [ProviderWhereUniqueInput!]
  update: [ProviderUpdateWithWhereUniqueWithoutNeedInput!]
  updateMany: [ProviderUpdateManyWithWhereNestedInput!]
  deleteMany: [ProviderScalarWhereInput!]
  upsert: [ProviderUpsertWithWhereUniqueWithoutNeedInput!]
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
  """Logical AND on all given filters."""
  AND: [ProviderWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProviderWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProviderWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  user: UserWhereInput
  need: NeedWhereInput
}

input ProviderWhereUniqueInput {
  id: ID
}

type Query {
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party]!
  needs(where: NeedWhereInput, orderBy: NeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Need]!
  providers(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Provider]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  party(where: PartyWhereUniqueInput!): Party
  need(where: NeedWhereUniqueInput!): Need
  provider(where: ProviderWhereUniqueInput!): Provider
  user(where: UserWhereUniqueInput!): User
  item(where: ItemWhereUniqueInput!): Item
  partiesConnection(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyConnection!
  needsConnection(where: NeedWhereInput, orderBy: NeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NeedConnection!
  providersConnection(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProviderConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  party(where: PartySubscriptionWhereInput): PartySubscriptionPayload
  need(where: NeedSubscriptionWhereInput): NeedSubscriptionPayload
  provider(where: ProviderSubscriptionWhereInput): ProviderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  image: String
  hostOf(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party!]
  guestOf(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  image: String

  """All values that are not equal to given value."""
  image_not: String

  """All values that are contained in given list."""
  image_in: [String!]

  """All values that are not contained in given list."""
  image_not_in: [String!]

  """All values less than the given value."""
  image_lt: String

  """All values less than or equal the given value."""
  image_lte: String

  """All values greater than the given value."""
  image_gt: String

  """All values greater than or equal the given value."""
  image_gte: String

  """All values containing the given string."""
  image_contains: String

  """All values not containing the given string."""
  image_not_contains: String

  """All values starting with the given string."""
  image_starts_with: String

  """All values not starting with the given string."""
  image_not_starts_with: String

  """All values ending with the given string."""
  image_ends_with: String

  """All values not ending with the given string."""
  image_not_ends_with: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
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
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutGuestOfInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutGuestOfInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredWithoutHostOfInput {
  create: UserCreateWithoutHostOfInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutHostOfDataInput
  upsert: UserUpsertWithoutHostOfInput
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
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  image: String

  """All values that are not equal to given value."""
  image_not: String

  """All values that are contained in given list."""
  image_in: [String!]

  """All values that are not contained in given list."""
  image_not_in: [String!]

  """All values less than the given value."""
  image_lt: String

  """All values less than or equal the given value."""
  image_lte: String

  """All values greater than the given value."""
  image_gt: String

  """All values greater than or equal the given value."""
  image_gte: String

  """All values containing the given string."""
  image_contains: String

  """All values not containing the given string."""
  image_not_contains: String

  """All values starting with the given string."""
  image_starts_with: String

  """All values not starting with the given string."""
  image_not_starts_with: String

  """All values ending with the given string."""
  image_ends_with: String

  """All values not ending with the given string."""
  image_not_ends_with: String
  hostOf_every: PartyWhereInput
  hostOf_some: PartyWhereInput
  hostOf_none: PartyWhereInput
  guestOf_every: PartyWhereInput
  guestOf_some: PartyWhereInput
  guestOf_none: PartyWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NeedOrderByInput =   'id_ASC' |
  'id_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'quantityUnit_ASC' |
  'quantityUnit_DESC' |
  'notes_ASC' |
  'notes_DESC' |
  'priority_ASC' |
  'priority_DESC'

export type PartyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'date_ASC' |
  'date_DESC' |
  'location_ASC' |
  'location_DESC' |
  'image_ASC' |
  'image_DESC' |
  'description_ASC' |
  'description_DESC'

export type Priority =   'Low' |
  'Medium' |
  'High'

export type PrismaDatabase =   'default'

export type ProviderOrderByInput =   'id_ASC' |
  'id_DESC' |
  'quantity_ASC' |
  'quantity_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'image_ASC' |
  'image_DESC'

export interface ItemCreateInput {
  id?: ID_Input | null
  name: String
}

export interface ItemCreateOneInput {
  create?: ItemCreateInput | null
  connect?: ItemWhereUniqueInput | null
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ItemWhereInput | null
}

export interface ItemUpdateDataInput {
  name?: String | null
}

export interface ItemUpdateInput {
  name?: String | null
}

export interface ItemUpdateManyMutationInput {
  name?: String | null
}

export interface ItemUpdateOneRequiredInput {
  create?: ItemCreateInput | null
  connect?: ItemWhereUniqueInput | null
  update?: ItemUpdateDataInput | null
  upsert?: ItemUpsertNestedInput | null
}

export interface ItemUpsertNestedInput {
  update: ItemUpdateDataInput
  create: ItemCreateInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput | null
  OR?: ItemWhereInput[] | ItemWhereInput | null
  NOT?: ItemWhereInput[] | ItemWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface ItemWhereUniqueInput {
  id?: ID_Input | null
}

export interface NeedCreatecategoryInput {
  set?: String[] | String | null
}

export interface NeedCreateInput {
  id?: ID_Input | null
  quantity: Int
  quantityUnit?: String | null
  notes?: String | null
  priority?: Priority | null
  category?: NeedCreatecategoryInput | null
  item: ItemCreateOneInput
  party: PartyCreateOneWithoutNeedsInput
  providers?: ProviderCreateManyWithoutNeedInput | null
}

export interface NeedCreateManyWithoutPartyInput {
  create?: NeedCreateWithoutPartyInput[] | NeedCreateWithoutPartyInput | null
  connect?: NeedWhereUniqueInput[] | NeedWhereUniqueInput | null
}

export interface NeedCreateOneWithoutProvidersInput {
  create?: NeedCreateWithoutProvidersInput | null
  connect?: NeedWhereUniqueInput | null
}

export interface NeedCreateWithoutPartyInput {
  id?: ID_Input | null
  quantity: Int
  quantityUnit?: String | null
  notes?: String | null
  priority?: Priority | null
  category?: NeedCreatecategoryInput | null
  item: ItemCreateOneInput
  providers?: ProviderCreateManyWithoutNeedInput | null
}

export interface NeedCreateWithoutProvidersInput {
  id?: ID_Input | null
  quantity: Int
  quantityUnit?: String | null
  notes?: String | null
  priority?: Priority | null
  category?: NeedCreatecategoryInput | null
  item: ItemCreateOneInput
  party: PartyCreateOneWithoutNeedsInput
}

export interface NeedScalarWhereInput {
  AND?: NeedScalarWhereInput[] | NeedScalarWhereInput | null
  OR?: NeedScalarWhereInput[] | NeedScalarWhereInput | null
  NOT?: NeedScalarWhereInput[] | NeedScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  quantity?: Int | null
  quantity_not?: Int | null
  quantity_in?: Int[] | Int | null
  quantity_not_in?: Int[] | Int | null
  quantity_lt?: Int | null
  quantity_lte?: Int | null
  quantity_gt?: Int | null
  quantity_gte?: Int | null
  quantityUnit?: String | null
  quantityUnit_not?: String | null
  quantityUnit_in?: String[] | String | null
  quantityUnit_not_in?: String[] | String | null
  quantityUnit_lt?: String | null
  quantityUnit_lte?: String | null
  quantityUnit_gt?: String | null
  quantityUnit_gte?: String | null
  quantityUnit_contains?: String | null
  quantityUnit_not_contains?: String | null
  quantityUnit_starts_with?: String | null
  quantityUnit_not_starts_with?: String | null
  quantityUnit_ends_with?: String | null
  quantityUnit_not_ends_with?: String | null
  notes?: String | null
  notes_not?: String | null
  notes_in?: String[] | String | null
  notes_not_in?: String[] | String | null
  notes_lt?: String | null
  notes_lte?: String | null
  notes_gt?: String | null
  notes_gte?: String | null
  notes_contains?: String | null
  notes_not_contains?: String | null
  notes_starts_with?: String | null
  notes_not_starts_with?: String | null
  notes_ends_with?: String | null
  notes_not_ends_with?: String | null
  priority?: Priority | null
  priority_not?: Priority | null
  priority_in?: Priority[] | Priority | null
  priority_not_in?: Priority[] | Priority | null
}

export interface NeedSubscriptionWhereInput {
  AND?: NeedSubscriptionWhereInput[] | NeedSubscriptionWhereInput | null
  OR?: NeedSubscriptionWhereInput[] | NeedSubscriptionWhereInput | null
  NOT?: NeedSubscriptionWhereInput[] | NeedSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: NeedWhereInput | null
}

export interface NeedUpdatecategoryInput {
  set?: String[] | String | null
}

export interface NeedUpdateInput {
  quantity?: Int | null
  quantityUnit?: String | null
  notes?: String | null
  priority?: Priority | null
  category?: NeedUpdatecategoryInput | null
  item?: ItemUpdateOneRequiredInput | null
  party?: PartyUpdateOneRequiredWithoutNeedsInput | null
  providers?: ProviderUpdateManyWithoutNeedInput | null
}

export interface NeedUpdateManyDataInput {
  quantity?: Int | null
  quantityUnit?: String | null
  notes?: String | null
  priority?: Priority | null
  category?: NeedUpdatecategoryInput | null
}

export interface NeedUpdateManyMutationInput {
  quantity?: Int | null
  quantityUnit?: String | null
  notes?: String | null
  priority?: Priority | null
  category?: NeedUpdatecategoryInput | null
}

export interface NeedUpdateManyWithoutPartyInput {
  create?: NeedCreateWithoutPartyInput[] | NeedCreateWithoutPartyInput | null
  connect?: NeedWhereUniqueInput[] | NeedWhereUniqueInput | null
  set?: NeedWhereUniqueInput[] | NeedWhereUniqueInput | null
  disconnect?: NeedWhereUniqueInput[] | NeedWhereUniqueInput | null
  delete?: NeedWhereUniqueInput[] | NeedWhereUniqueInput | null
  update?: NeedUpdateWithWhereUniqueWithoutPartyInput[] | NeedUpdateWithWhereUniqueWithoutPartyInput | null
  updateMany?: NeedUpdateManyWithWhereNestedInput[] | NeedUpdateManyWithWhereNestedInput | null
  deleteMany?: NeedScalarWhereInput[] | NeedScalarWhereInput | null
  upsert?: NeedUpsertWithWhereUniqueWithoutPartyInput[] | NeedUpsertWithWhereUniqueWithoutPartyInput | null
}

export interface NeedUpdateManyWithWhereNestedInput {
  where: NeedScalarWhereInput
  data: NeedUpdateManyDataInput
}

export interface NeedUpdateOneRequiredWithoutProvidersInput {
  create?: NeedCreateWithoutProvidersInput | null
  connect?: NeedWhereUniqueInput | null
  update?: NeedUpdateWithoutProvidersDataInput | null
  upsert?: NeedUpsertWithoutProvidersInput | null
}

export interface NeedUpdateWithoutPartyDataInput {
  quantity?: Int | null
  quantityUnit?: String | null
  notes?: String | null
  priority?: Priority | null
  category?: NeedUpdatecategoryInput | null
  item?: ItemUpdateOneRequiredInput | null
  providers?: ProviderUpdateManyWithoutNeedInput | null
}

export interface NeedUpdateWithoutProvidersDataInput {
  quantity?: Int | null
  quantityUnit?: String | null
  notes?: String | null
  priority?: Priority | null
  category?: NeedUpdatecategoryInput | null
  item?: ItemUpdateOneRequiredInput | null
  party?: PartyUpdateOneRequiredWithoutNeedsInput | null
}

export interface NeedUpdateWithWhereUniqueWithoutPartyInput {
  where: NeedWhereUniqueInput
  data: NeedUpdateWithoutPartyDataInput
}

export interface NeedUpsertWithoutProvidersInput {
  update: NeedUpdateWithoutProvidersDataInput
  create: NeedCreateWithoutProvidersInput
}

export interface NeedUpsertWithWhereUniqueWithoutPartyInput {
  where: NeedWhereUniqueInput
  update: NeedUpdateWithoutPartyDataInput
  create: NeedCreateWithoutPartyInput
}

export interface NeedWhereInput {
  AND?: NeedWhereInput[] | NeedWhereInput | null
  OR?: NeedWhereInput[] | NeedWhereInput | null
  NOT?: NeedWhereInput[] | NeedWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  quantity?: Int | null
  quantity_not?: Int | null
  quantity_in?: Int[] | Int | null
  quantity_not_in?: Int[] | Int | null
  quantity_lt?: Int | null
  quantity_lte?: Int | null
  quantity_gt?: Int | null
  quantity_gte?: Int | null
  quantityUnit?: String | null
  quantityUnit_not?: String | null
  quantityUnit_in?: String[] | String | null
  quantityUnit_not_in?: String[] | String | null
  quantityUnit_lt?: String | null
  quantityUnit_lte?: String | null
  quantityUnit_gt?: String | null
  quantityUnit_gte?: String | null
  quantityUnit_contains?: String | null
  quantityUnit_not_contains?: String | null
  quantityUnit_starts_with?: String | null
  quantityUnit_not_starts_with?: String | null
  quantityUnit_ends_with?: String | null
  quantityUnit_not_ends_with?: String | null
  notes?: String | null
  notes_not?: String | null
  notes_in?: String[] | String | null
  notes_not_in?: String[] | String | null
  notes_lt?: String | null
  notes_lte?: String | null
  notes_gt?: String | null
  notes_gte?: String | null
  notes_contains?: String | null
  notes_not_contains?: String | null
  notes_starts_with?: String | null
  notes_not_starts_with?: String | null
  notes_ends_with?: String | null
  notes_not_ends_with?: String | null
  priority?: Priority | null
  priority_not?: Priority | null
  priority_in?: Priority[] | Priority | null
  priority_not_in?: Priority[] | Priority | null
  item?: ItemWhereInput | null
  party?: PartyWhereInput | null
  providers_every?: ProviderWhereInput | null
  providers_some?: ProviderWhereInput | null
  providers_none?: ProviderWhereInput | null
}

export interface NeedWhereUniqueInput {
  id?: ID_Input | null
}

export interface PartyCreateInput {
  id?: ID_Input | null
  title: String
  date: DateTime
  location: String
  image: String
  description: String
  host: UserCreateOneWithoutHostOfInput
  guests?: UserCreateManyWithoutGuestOfInput | null
  needs?: NeedCreateManyWithoutPartyInput | null
}

export interface PartyCreateManyWithoutGuestsInput {
  create?: PartyCreateWithoutGuestsInput[] | PartyCreateWithoutGuestsInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
}

export interface PartyCreateManyWithoutHostInput {
  create?: PartyCreateWithoutHostInput[] | PartyCreateWithoutHostInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
}

export interface PartyCreateOneWithoutNeedsInput {
  create?: PartyCreateWithoutNeedsInput | null
  connect?: PartyWhereUniqueInput | null
}

export interface PartyCreateWithoutGuestsInput {
  id?: ID_Input | null
  title: String
  date: DateTime
  location: String
  image: String
  description: String
  host: UserCreateOneWithoutHostOfInput
  needs?: NeedCreateManyWithoutPartyInput | null
}

export interface PartyCreateWithoutHostInput {
  id?: ID_Input | null
  title: String
  date: DateTime
  location: String
  image: String
  description: String
  guests?: UserCreateManyWithoutGuestOfInput | null
  needs?: NeedCreateManyWithoutPartyInput | null
}

export interface PartyCreateWithoutNeedsInput {
  id?: ID_Input | null
  title: String
  date: DateTime
  location: String
  image: String
  description: String
  host: UserCreateOneWithoutHostOfInput
  guests?: UserCreateManyWithoutGuestOfInput | null
}

export interface PartyScalarWhereInput {
  AND?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  OR?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  NOT?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  date?: DateTime | null
  date_not?: DateTime | null
  date_in?: DateTime[] | DateTime | null
  date_not_in?: DateTime[] | DateTime | null
  date_lt?: DateTime | null
  date_lte?: DateTime | null
  date_gt?: DateTime | null
  date_gte?: DateTime | null
  location?: String | null
  location_not?: String | null
  location_in?: String[] | String | null
  location_not_in?: String[] | String | null
  location_lt?: String | null
  location_lte?: String | null
  location_gt?: String | null
  location_gte?: String | null
  location_contains?: String | null
  location_not_contains?: String | null
  location_starts_with?: String | null
  location_not_starts_with?: String | null
  location_ends_with?: String | null
  location_not_ends_with?: String | null
  image?: String | null
  image_not?: String | null
  image_in?: String[] | String | null
  image_not_in?: String[] | String | null
  image_lt?: String | null
  image_lte?: String | null
  image_gt?: String | null
  image_gte?: String | null
  image_contains?: String | null
  image_not_contains?: String | null
  image_starts_with?: String | null
  image_not_starts_with?: String | null
  image_ends_with?: String | null
  image_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
}

export interface PartySubscriptionWhereInput {
  AND?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null
  OR?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null
  NOT?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PartyWhereInput | null
}

export interface PartyUpdateInput {
  title?: String | null
  date?: DateTime | null
  location?: String | null
  image?: String | null
  description?: String | null
  host?: UserUpdateOneRequiredWithoutHostOfInput | null
  guests?: UserUpdateManyWithoutGuestOfInput | null
  needs?: NeedUpdateManyWithoutPartyInput | null
}

export interface PartyUpdateManyDataInput {
  title?: String | null
  date?: DateTime | null
  location?: String | null
  image?: String | null
  description?: String | null
}

export interface PartyUpdateManyMutationInput {
  title?: String | null
  date?: DateTime | null
  location?: String | null
  image?: String | null
  description?: String | null
}

export interface PartyUpdateManyWithoutGuestsInput {
  create?: PartyCreateWithoutGuestsInput[] | PartyCreateWithoutGuestsInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  set?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  disconnect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  delete?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  update?: PartyUpdateWithWhereUniqueWithoutGuestsInput[] | PartyUpdateWithWhereUniqueWithoutGuestsInput | null
  updateMany?: PartyUpdateManyWithWhereNestedInput[] | PartyUpdateManyWithWhereNestedInput | null
  deleteMany?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  upsert?: PartyUpsertWithWhereUniqueWithoutGuestsInput[] | PartyUpsertWithWhereUniqueWithoutGuestsInput | null
}

export interface PartyUpdateManyWithoutHostInput {
  create?: PartyCreateWithoutHostInput[] | PartyCreateWithoutHostInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  set?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  disconnect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  delete?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  update?: PartyUpdateWithWhereUniqueWithoutHostInput[] | PartyUpdateWithWhereUniqueWithoutHostInput | null
  updateMany?: PartyUpdateManyWithWhereNestedInput[] | PartyUpdateManyWithWhereNestedInput | null
  deleteMany?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  upsert?: PartyUpsertWithWhereUniqueWithoutHostInput[] | PartyUpsertWithWhereUniqueWithoutHostInput | null
}

export interface PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput
  data: PartyUpdateManyDataInput
}

export interface PartyUpdateOneRequiredWithoutNeedsInput {
  create?: PartyCreateWithoutNeedsInput | null
  connect?: PartyWhereUniqueInput | null
  update?: PartyUpdateWithoutNeedsDataInput | null
  upsert?: PartyUpsertWithoutNeedsInput | null
}

export interface PartyUpdateWithoutGuestsDataInput {
  title?: String | null
  date?: DateTime | null
  location?: String | null
  image?: String | null
  description?: String | null
  host?: UserUpdateOneRequiredWithoutHostOfInput | null
  needs?: NeedUpdateManyWithoutPartyInput | null
}

export interface PartyUpdateWithoutHostDataInput {
  title?: String | null
  date?: DateTime | null
  location?: String | null
  image?: String | null
  description?: String | null
  guests?: UserUpdateManyWithoutGuestOfInput | null
  needs?: NeedUpdateManyWithoutPartyInput | null
}

export interface PartyUpdateWithoutNeedsDataInput {
  title?: String | null
  date?: DateTime | null
  location?: String | null
  image?: String | null
  description?: String | null
  host?: UserUpdateOneRequiredWithoutHostOfInput | null
  guests?: UserUpdateManyWithoutGuestOfInput | null
}

export interface PartyUpdateWithWhereUniqueWithoutGuestsInput {
  where: PartyWhereUniqueInput
  data: PartyUpdateWithoutGuestsDataInput
}

export interface PartyUpdateWithWhereUniqueWithoutHostInput {
  where: PartyWhereUniqueInput
  data: PartyUpdateWithoutHostDataInput
}

export interface PartyUpsertWithoutNeedsInput {
  update: PartyUpdateWithoutNeedsDataInput
  create: PartyCreateWithoutNeedsInput
}

export interface PartyUpsertWithWhereUniqueWithoutGuestsInput {
  where: PartyWhereUniqueInput
  update: PartyUpdateWithoutGuestsDataInput
  create: PartyCreateWithoutGuestsInput
}

export interface PartyUpsertWithWhereUniqueWithoutHostInput {
  where: PartyWhereUniqueInput
  update: PartyUpdateWithoutHostDataInput
  create: PartyCreateWithoutHostInput
}

export interface PartyWhereInput {
  AND?: PartyWhereInput[] | PartyWhereInput | null
  OR?: PartyWhereInput[] | PartyWhereInput | null
  NOT?: PartyWhereInput[] | PartyWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  date?: DateTime | null
  date_not?: DateTime | null
  date_in?: DateTime[] | DateTime | null
  date_not_in?: DateTime[] | DateTime | null
  date_lt?: DateTime | null
  date_lte?: DateTime | null
  date_gt?: DateTime | null
  date_gte?: DateTime | null
  location?: String | null
  location_not?: String | null
  location_in?: String[] | String | null
  location_not_in?: String[] | String | null
  location_lt?: String | null
  location_lte?: String | null
  location_gt?: String | null
  location_gte?: String | null
  location_contains?: String | null
  location_not_contains?: String | null
  location_starts_with?: String | null
  location_not_starts_with?: String | null
  location_ends_with?: String | null
  location_not_ends_with?: String | null
  image?: String | null
  image_not?: String | null
  image_in?: String[] | String | null
  image_not_in?: String[] | String | null
  image_lt?: String | null
  image_lte?: String | null
  image_gt?: String | null
  image_gte?: String | null
  image_contains?: String | null
  image_not_contains?: String | null
  image_starts_with?: String | null
  image_not_starts_with?: String | null
  image_ends_with?: String | null
  image_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  host?: UserWhereInput | null
  guests_every?: UserWhereInput | null
  guests_some?: UserWhereInput | null
  guests_none?: UserWhereInput | null
  needs_every?: NeedWhereInput | null
  needs_some?: NeedWhereInput | null
  needs_none?: NeedWhereInput | null
}

export interface PartyWhereUniqueInput {
  id?: ID_Input | null
}

export interface ProviderCreateInput {
  id?: ID_Input | null
  quantity: Int
  user: UserCreateOneInput
  need: NeedCreateOneWithoutProvidersInput
}

export interface ProviderCreateManyWithoutNeedInput {
  create?: ProviderCreateWithoutNeedInput[] | ProviderCreateWithoutNeedInput | null
  connect?: ProviderWhereUniqueInput[] | ProviderWhereUniqueInput | null
}

export interface ProviderCreateWithoutNeedInput {
  id?: ID_Input | null
  quantity: Int
  user: UserCreateOneInput
}

export interface ProviderScalarWhereInput {
  AND?: ProviderScalarWhereInput[] | ProviderScalarWhereInput | null
  OR?: ProviderScalarWhereInput[] | ProviderScalarWhereInput | null
  NOT?: ProviderScalarWhereInput[] | ProviderScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  quantity?: Int | null
  quantity_not?: Int | null
  quantity_in?: Int[] | Int | null
  quantity_not_in?: Int[] | Int | null
  quantity_lt?: Int | null
  quantity_lte?: Int | null
  quantity_gt?: Int | null
  quantity_gte?: Int | null
}

export interface ProviderSubscriptionWhereInput {
  AND?: ProviderSubscriptionWhereInput[] | ProviderSubscriptionWhereInput | null
  OR?: ProviderSubscriptionWhereInput[] | ProviderSubscriptionWhereInput | null
  NOT?: ProviderSubscriptionWhereInput[] | ProviderSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ProviderWhereInput | null
}

export interface ProviderUpdateInput {
  quantity?: Int | null
  user?: UserUpdateOneRequiredInput | null
  need?: NeedUpdateOneRequiredWithoutProvidersInput | null
}

export interface ProviderUpdateManyDataInput {
  quantity?: Int | null
}

export interface ProviderUpdateManyMutationInput {
  quantity?: Int | null
}

export interface ProviderUpdateManyWithoutNeedInput {
  create?: ProviderCreateWithoutNeedInput[] | ProviderCreateWithoutNeedInput | null
  connect?: ProviderWhereUniqueInput[] | ProviderWhereUniqueInput | null
  set?: ProviderWhereUniqueInput[] | ProviderWhereUniqueInput | null
  disconnect?: ProviderWhereUniqueInput[] | ProviderWhereUniqueInput | null
  delete?: ProviderWhereUniqueInput[] | ProviderWhereUniqueInput | null
  update?: ProviderUpdateWithWhereUniqueWithoutNeedInput[] | ProviderUpdateWithWhereUniqueWithoutNeedInput | null
  updateMany?: ProviderUpdateManyWithWhereNestedInput[] | ProviderUpdateManyWithWhereNestedInput | null
  deleteMany?: ProviderScalarWhereInput[] | ProviderScalarWhereInput | null
  upsert?: ProviderUpsertWithWhereUniqueWithoutNeedInput[] | ProviderUpsertWithWhereUniqueWithoutNeedInput | null
}

export interface ProviderUpdateManyWithWhereNestedInput {
  where: ProviderScalarWhereInput
  data: ProviderUpdateManyDataInput
}

export interface ProviderUpdateWithoutNeedDataInput {
  quantity?: Int | null
  user?: UserUpdateOneRequiredInput | null
}

export interface ProviderUpdateWithWhereUniqueWithoutNeedInput {
  where: ProviderWhereUniqueInput
  data: ProviderUpdateWithoutNeedDataInput
}

export interface ProviderUpsertWithWhereUniqueWithoutNeedInput {
  where: ProviderWhereUniqueInput
  update: ProviderUpdateWithoutNeedDataInput
  create: ProviderCreateWithoutNeedInput
}

export interface ProviderWhereInput {
  AND?: ProviderWhereInput[] | ProviderWhereInput | null
  OR?: ProviderWhereInput[] | ProviderWhereInput | null
  NOT?: ProviderWhereInput[] | ProviderWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  quantity?: Int | null
  quantity_not?: Int | null
  quantity_in?: Int[] | Int | null
  quantity_not_in?: Int[] | Int | null
  quantity_lt?: Int | null
  quantity_lte?: Int | null
  quantity_gt?: Int | null
  quantity_gte?: Int | null
  user?: UserWhereInput | null
  need?: NeedWhereInput | null
}

export interface ProviderWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  name: String
  email: String
  password: String
  image?: String | null
  hostOf?: PartyCreateManyWithoutHostInput | null
  guestOf?: PartyCreateManyWithoutGuestsInput | null
}

export interface UserCreateManyWithoutGuestOfInput {
  create?: UserCreateWithoutGuestOfInput[] | UserCreateWithoutGuestOfInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutHostOfInput {
  create?: UserCreateWithoutHostOfInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutGuestOfInput {
  id?: ID_Input | null
  name: String
  email: String
  password: String
  image?: String | null
  hostOf?: PartyCreateManyWithoutHostInput | null
}

export interface UserCreateWithoutHostOfInput {
  id?: ID_Input | null
  name: String
  email: String
  password: String
  image?: String | null
  guestOf?: PartyCreateManyWithoutGuestsInput | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  image?: String | null
  image_not?: String | null
  image_in?: String[] | String | null
  image_not_in?: String[] | String | null
  image_lt?: String | null
  image_lte?: String | null
  image_gt?: String | null
  image_gte?: String | null
  image_contains?: String | null
  image_not_contains?: String | null
  image_starts_with?: String | null
  image_not_starts_with?: String | null
  image_ends_with?: String | null
  image_not_ends_with?: String | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  image?: String | null
  hostOf?: PartyUpdateManyWithoutHostInput | null
  guestOf?: PartyUpdateManyWithoutGuestsInput | null
}

export interface UserUpdateInput {
  name?: String | null
  email?: String | null
  password?: String | null
  image?: String | null
  hostOf?: PartyUpdateManyWithoutHostInput | null
  guestOf?: PartyUpdateManyWithoutGuestsInput | null
}

export interface UserUpdateManyDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  image?: String | null
}

export interface UserUpdateManyMutationInput {
  name?: String | null
  email?: String | null
  password?: String | null
  image?: String | null
}

export interface UserUpdateManyWithoutGuestOfInput {
  create?: UserCreateWithoutGuestOfInput[] | UserCreateWithoutGuestOfInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutGuestOfInput[] | UserUpdateWithWhereUniqueWithoutGuestOfInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutGuestOfInput[] | UserUpsertWithWhereUniqueWithoutGuestOfInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpdateOneRequiredWithoutHostOfInput {
  create?: UserCreateWithoutHostOfInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutHostOfDataInput | null
  upsert?: UserUpsertWithoutHostOfInput | null
}

export interface UserUpdateWithoutGuestOfDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  image?: String | null
  hostOf?: PartyUpdateManyWithoutHostInput | null
}

export interface UserUpdateWithoutHostOfDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  image?: String | null
  guestOf?: PartyUpdateManyWithoutGuestsInput | null
}

export interface UserUpdateWithWhereUniqueWithoutGuestOfInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutGuestOfDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutHostOfInput {
  update: UserUpdateWithoutHostOfDataInput
  create: UserCreateWithoutHostOfInput
}

export interface UserUpsertWithWhereUniqueWithoutGuestOfInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutGuestOfDataInput
  create: UserCreateWithoutGuestOfInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  image?: String | null
  image_not?: String | null
  image_in?: String[] | String | null
  image_not_in?: String[] | String | null
  image_lt?: String | null
  image_lte?: String | null
  image_gt?: String | null
  image_gte?: String | null
  image_contains?: String | null
  image_not_contains?: String | null
  image_starts_with?: String | null
  image_not_starts_with?: String | null
  image_ends_with?: String | null
  image_not_ends_with?: String | null
  hostOf_every?: PartyWhereInput | null
  hostOf_some?: PartyWhereInput | null
  hostOf_none?: PartyWhereInput | null
  guestOf_every?: PartyWhereInput | null
  guestOf_some?: PartyWhereInput | null
  guestOf_none?: PartyWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateItem {
  count: Int
}

export interface AggregateNeed {
  count: Int
}

export interface AggregateParty {
  count: Int
}

export interface AggregateProvider {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Item extends Node {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: Array<ItemEdge | null>
  aggregate: AggregateItem
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

export interface ItemPreviousValues {
  id: ID_Output
  name: String
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item | null
  updatedFields?: Array<String> | null
  previousValues?: ItemPreviousValues | null
}

export interface Need extends Node {
  id: ID_Output
  item: Item
  quantity: Int
  quantityUnit?: String | null
  party: Party
  providers?: Array<Provider> | null
  category: Array<String>
  notes?: String | null
  priority?: Priority | null
}

/*
 * A connection to a list of items.

 */
export interface NeedConnection {
  pageInfo: PageInfo
  edges: Array<NeedEdge | null>
  aggregate: AggregateNeed
}

/*
 * An edge in a connection.

 */
export interface NeedEdge {
  node: Need
  cursor: String
}

export interface NeedPreviousValues {
  id: ID_Output
  quantity: Int
  quantityUnit?: String | null
  category: Array<String>
  notes?: String | null
  priority?: Priority | null
}

export interface NeedSubscriptionPayload {
  mutation: MutationType
  node?: Need | null
  updatedFields?: Array<String> | null
  previousValues?: NeedPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Party extends Node {
  id: ID_Output
  title: String
  host: User
  guests?: Array<User> | null
  date: DateTime
  location: String
  image: String
  description: String
  needs?: Array<Need> | null
}

/*
 * A connection to a list of items.

 */
export interface PartyConnection {
  pageInfo: PageInfo
  edges: Array<PartyEdge | null>
  aggregate: AggregateParty
}

/*
 * An edge in a connection.

 */
export interface PartyEdge {
  node: Party
  cursor: String
}

export interface PartyPreviousValues {
  id: ID_Output
  title: String
  date: DateTime
  location: String
  image: String
  description: String
}

export interface PartySubscriptionPayload {
  mutation: MutationType
  node?: Party | null
  updatedFields?: Array<String> | null
  previousValues?: PartyPreviousValues | null
}

export interface Provider extends Node {
  id: ID_Output
  quantity: Int
  user: User
  need: Need
}

/*
 * A connection to a list of items.

 */
export interface ProviderConnection {
  pageInfo: PageInfo
  edges: Array<ProviderEdge | null>
  aggregate: AggregateProvider
}

/*
 * An edge in a connection.

 */
export interface ProviderEdge {
  node: Provider
  cursor: String
}

export interface ProviderPreviousValues {
  id: ID_Output
  quantity: Int
}

export interface ProviderSubscriptionPayload {
  mutation: MutationType
  node?: Provider | null
  updatedFields?: Array<String> | null
  previousValues?: ProviderPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  image?: String | null
  hostOf?: Array<Party> | null
  guestOf?: Array<Party> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
  image?: String | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string