
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model Discount
 * 
 */
export type Discount = $Result.DefaultSelection<Prisma.$DiscountPayload>
/**
 * Model Redemption
 * 
 */
export type Redemption = $Result.DefaultSelection<Prisma.$RedemptionPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model DiscountCategory
 * 
 */
export type DiscountCategory = $Result.DefaultSelection<Prisma.$DiscountCategoryPayload>
/**
 * Model BusinessCategory
 * 
 */
export type BusinessCategory = $Result.DefaultSelection<Prisma.$BusinessCategoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs>;

  /**
   * `prisma.discount`: Exposes CRUD operations for the **Discount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounts
    * const discounts = await prisma.discount.findMany()
    * ```
    */
  get discount(): Prisma.DiscountDelegate<ExtArgs>;

  /**
   * `prisma.redemption`: Exposes CRUD operations for the **Redemption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Redemptions
    * const redemptions = await prisma.redemption.findMany()
    * ```
    */
  get redemption(): Prisma.RedemptionDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.discountCategory`: Exposes CRUD operations for the **DiscountCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscountCategories
    * const discountCategories = await prisma.discountCategory.findMany()
    * ```
    */
  get discountCategory(): Prisma.DiscountCategoryDelegate<ExtArgs>;

  /**
   * `prisma.businessCategory`: Exposes CRUD operations for the **BusinessCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessCategories
    * const businessCategories = await prisma.businessCategory.findMany()
    * ```
    */
  get businessCategory(): Prisma.BusinessCategoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Business: 'Business',
    Discount: 'Discount',
    Redemption: 'Redemption',
    Category: 'Category',
    DiscountCategory: 'DiscountCategory',
    BusinessCategory: 'BusinessCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "business" | "discount" | "redemption" | "category" | "discountCategory" | "businessCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      Discount: {
        payload: Prisma.$DiscountPayload<ExtArgs>
        fields: Prisma.DiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findFirst: {
            args: Prisma.DiscountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findMany: {
            args: Prisma.DiscountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          create: {
            args: Prisma.DiscountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          createMany: {
            args: Prisma.DiscountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          delete: {
            args: Prisma.DiscountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          update: {
            args: Prisma.DiscountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          deleteMany: {
            args: Prisma.DiscountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiscountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          aggregate: {
            args: Prisma.DiscountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscount>
          }
          groupBy: {
            args: Prisma.DiscountGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountCountAggregateOutputType> | number
          }
        }
      }
      Redemption: {
        payload: Prisma.$RedemptionPayload<ExtArgs>
        fields: Prisma.RedemptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RedemptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RedemptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          findFirst: {
            args: Prisma.RedemptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RedemptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          findMany: {
            args: Prisma.RedemptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>[]
          }
          create: {
            args: Prisma.RedemptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          createMany: {
            args: Prisma.RedemptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RedemptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>[]
          }
          delete: {
            args: Prisma.RedemptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          update: {
            args: Prisma.RedemptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          deleteMany: {
            args: Prisma.RedemptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RedemptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RedemptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          aggregate: {
            args: Prisma.RedemptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedemption>
          }
          groupBy: {
            args: Prisma.RedemptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RedemptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RedemptionCountArgs<ExtArgs>
            result: $Utils.Optional<RedemptionCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      DiscountCategory: {
        payload: Prisma.$DiscountCategoryPayload<ExtArgs>
        fields: Prisma.DiscountCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload>
          }
          findFirst: {
            args: Prisma.DiscountCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload>
          }
          findMany: {
            args: Prisma.DiscountCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload>[]
          }
          create: {
            args: Prisma.DiscountCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload>
          }
          createMany: {
            args: Prisma.DiscountCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscountCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload>[]
          }
          delete: {
            args: Prisma.DiscountCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload>
          }
          update: {
            args: Prisma.DiscountCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload>
          }
          deleteMany: {
            args: Prisma.DiscountCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiscountCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCategoryPayload>
          }
          aggregate: {
            args: Prisma.DiscountCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscountCategory>
          }
          groupBy: {
            args: Prisma.DiscountCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountCategoryCountAggregateOutputType> | number
          }
        }
      }
      BusinessCategory: {
        payload: Prisma.$BusinessCategoryPayload<ExtArgs>
        fields: Prisma.BusinessCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          findFirst: {
            args: Prisma.BusinessCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          findMany: {
            args: Prisma.BusinessCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>[]
          }
          create: {
            args: Prisma.BusinessCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          createMany: {
            args: Prisma.BusinessCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>[]
          }
          delete: {
            args: Prisma.BusinessCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          update: {
            args: Prisma.BusinessCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BusinessCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          aggregate: {
            args: Prisma.BusinessCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessCategory>
          }
          groupBy: {
            args: Prisma.BusinessCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    redemptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemptions?: boolean | UserCountOutputTypeCountRedemptionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    discounts: number
    categories: number
    redemptions: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discounts?: boolean | BusinessCountOutputTypeCountDiscountsArgs
    categories?: boolean | BusinessCountOutputTypeCountCategoriesArgs
    redemptions?: boolean | BusinessCountOutputTypeCountRedemptionsArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountDiscountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessCategoryWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionWhereInput
  }


  /**
   * Count Type DiscountCountOutputType
   */

  export type DiscountCountOutputType = {
    categories: number
    redemptions: number
  }

  export type DiscountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | DiscountCountOutputTypeCountCategoriesArgs
    redemptions?: boolean | DiscountCountOutputTypeCountRedemptionsArgs
  }

  // Custom InputTypes
  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCountOutputType
     */
    select?: DiscountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountCategoryWhereInput
  }

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeCountRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    discounts: number
    businesses: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discounts?: boolean | CategoryCountOutputTypeCountDiscountsArgs
    businesses?: boolean | CategoryCountOutputTypeCountBusinessesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountDiscountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountCategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBusinessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    tokenVersion: number | null
  }

  export type UserSumAggregateOutputType = {
    tokenVersion: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    tier: string | null
    status: string | null
    role: string | null
    tokenVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    tier: string | null
    status: string | null
    role: string | null
    tokenVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    tier: number
    status: number
    role: number
    tokenVersion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    tokenVersion?: true
  }

  export type UserSumAggregateInputType = {
    tokenVersion?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    tier?: true
    status?: true
    role?: true
    tokenVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    tier?: true
    status?: true
    role?: true
    tokenVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    tier?: true
    status?: true
    role?: true
    tokenVersion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    passwordHash: string
    tier: string
    status: string
    role: string
    tokenVersion: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    tier?: boolean
    status?: boolean
    role?: boolean
    tokenVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    redemptions?: boolean | User$redemptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    tier?: boolean
    status?: boolean
    role?: boolean
    tokenVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    tier?: boolean
    status?: boolean
    role?: boolean
    tokenVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemptions?: boolean | User$redemptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      redemptions: Prisma.$RedemptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      passwordHash: string
      tier: string
      status: string
      role: string
      tokenVersion: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    redemptions<T extends User$redemptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly tier: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly tokenVersion: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.redemptions
   */
  export type User$redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    where?: RedemptionWhereInput
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    cursor?: RedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    ruc: string | null
    address: string | null
    contact: string | null
    status: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    ruc: string | null
    address: string | null
    contact: string | null
    status: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    code: number
    name: number
    ruc: number
    address: number
    contact: number
    status: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    ruc?: true
    address?: true
    contact?: true
    status?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    ruc?: true
    address?: true
    contact?: true
    status?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    ruc?: true
    address?: true
    contact?: true
    status?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: string
    code: string
    name: string
    ruc: string | null
    address: string | null
    contact: string | null
    status: string
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    ruc?: boolean
    address?: boolean
    contact?: boolean
    status?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discounts?: boolean | Business$discountsArgs<ExtArgs>
    categories?: boolean | Business$categoriesArgs<ExtArgs>
    redemptions?: boolean | Business$redemptionsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    ruc?: boolean
    address?: boolean
    contact?: boolean
    status?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    ruc?: boolean
    address?: boolean
    contact?: boolean
    status?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discounts?: boolean | Business$discountsArgs<ExtArgs>
    categories?: boolean | Business$categoriesArgs<ExtArgs>
    redemptions?: boolean | Business$redemptionsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      discounts: Prisma.$DiscountPayload<ExtArgs>[]
      categories: Prisma.$BusinessCategoryPayload<ExtArgs>[]
      redemptions: Prisma.$RedemptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      ruc: string | null
      address: string | null
      contact: string | null
      status: string
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discounts<T extends Business$discountsArgs<ExtArgs> = {}>(args?: Subset<T, Business$discountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findMany"> | Null>
    categories<T extends Business$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Business$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    redemptions<T extends Business$redemptionsArgs<ExtArgs> = {}>(args?: Subset<T, Business$redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */ 
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'String'>
    readonly code: FieldRef<"Business", 'String'>
    readonly name: FieldRef<"Business", 'String'>
    readonly ruc: FieldRef<"Business", 'String'>
    readonly address: FieldRef<"Business", 'String'>
    readonly contact: FieldRef<"Business", 'String'>
    readonly status: FieldRef<"Business", 'String'>
    readonly imageUrl: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
  }

  /**
   * Business.discounts
   */
  export type Business$discountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    where?: DiscountWhereInput
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    cursor?: DiscountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Business.categories
   */
  export type Business$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    where?: BusinessCategoryWhereInput
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    cursor?: BusinessCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessCategoryScalarFieldEnum | BusinessCategoryScalarFieldEnum[]
  }

  /**
   * Business.redemptions
   */
  export type Business$redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    where?: RedemptionWhereInput
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    cursor?: RedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model Discount
   */

  export type AggregateDiscount = {
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  export type DiscountAvgAggregateOutputType = {
    limitPerUser: number | null
    limitTotal: number | null
    usedTotal: number | null
  }

  export type DiscountSumAggregateOutputType = {
    limitPerUser: number | null
    limitTotal: number | null
    usedTotal: number | null
  }

  export type DiscountMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    description: string | null
    images: string | null
    imageUrl: string | null
    tierBasic: boolean | null
    tierNormal: boolean | null
    tierPremium: boolean | null
    startAt: Date | null
    endAt: Date | null
    limitPerUser: number | null
    limitTotal: number | null
    usedTotal: number | null
    terms: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    businessId: string | null
  }

  export type DiscountMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    description: string | null
    images: string | null
    imageUrl: string | null
    tierBasic: boolean | null
    tierNormal: boolean | null
    tierPremium: boolean | null
    startAt: Date | null
    endAt: Date | null
    limitPerUser: number | null
    limitTotal: number | null
    usedTotal: number | null
    terms: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    businessId: string | null
  }

  export type DiscountCountAggregateOutputType = {
    id: number
    code: number
    title: number
    description: number
    images: number
    imageUrl: number
    tierBasic: number
    tierNormal: number
    tierPremium: number
    startAt: number
    endAt: number
    limitPerUser: number
    limitTotal: number
    usedTotal: number
    terms: number
    status: number
    createdAt: number
    updatedAt: number
    businessId: number
    _all: number
  }


  export type DiscountAvgAggregateInputType = {
    limitPerUser?: true
    limitTotal?: true
    usedTotal?: true
  }

  export type DiscountSumAggregateInputType = {
    limitPerUser?: true
    limitTotal?: true
    usedTotal?: true
  }

  export type DiscountMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    images?: true
    imageUrl?: true
    tierBasic?: true
    tierNormal?: true
    tierPremium?: true
    startAt?: true
    endAt?: true
    limitPerUser?: true
    limitTotal?: true
    usedTotal?: true
    terms?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    businessId?: true
  }

  export type DiscountMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    images?: true
    imageUrl?: true
    tierBasic?: true
    tierNormal?: true
    tierPremium?: true
    startAt?: true
    endAt?: true
    limitPerUser?: true
    limitTotal?: true
    usedTotal?: true
    terms?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    businessId?: true
  }

  export type DiscountCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    images?: true
    imageUrl?: true
    tierBasic?: true
    tierNormal?: true
    tierPremium?: true
    startAt?: true
    endAt?: true
    limitPerUser?: true
    limitTotal?: true
    usedTotal?: true
    terms?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    businessId?: true
    _all?: true
  }

  export type DiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discount to aggregate.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discounts
    **/
    _count?: true | DiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountMaxAggregateInputType
  }

  export type GetDiscountAggregateType<T extends DiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscount[P]>
      : GetScalarType<T[P], AggregateDiscount[P]>
  }




  export type DiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountWhereInput
    orderBy?: DiscountOrderByWithAggregationInput | DiscountOrderByWithAggregationInput[]
    by: DiscountScalarFieldEnum[] | DiscountScalarFieldEnum
    having?: DiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountCountAggregateInputType | true
    _avg?: DiscountAvgAggregateInputType
    _sum?: DiscountSumAggregateInputType
    _min?: DiscountMinAggregateInputType
    _max?: DiscountMaxAggregateInputType
  }

  export type DiscountGroupByOutputType = {
    id: string
    code: string
    title: string
    description: string
    images: string | null
    imageUrl: string | null
    tierBasic: boolean
    tierNormal: boolean
    tierPremium: boolean
    startAt: Date
    endAt: Date
    limitPerUser: number | null
    limitTotal: number | null
    usedTotal: number
    terms: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    businessId: string | null
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  type GetDiscountGroupByPayload<T extends DiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountGroupByOutputType[P]>
        }
      >
    >


  export type DiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    images?: boolean
    imageUrl?: boolean
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt?: boolean
    endAt?: boolean
    limitPerUser?: boolean
    limitTotal?: boolean
    usedTotal?: boolean
    terms?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessId?: boolean
    business?: boolean | Discount$businessArgs<ExtArgs>
    categories?: boolean | Discount$categoriesArgs<ExtArgs>
    redemptions?: boolean | Discount$redemptionsArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    images?: boolean
    imageUrl?: boolean
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt?: boolean
    endAt?: boolean
    limitPerUser?: boolean
    limitTotal?: boolean
    usedTotal?: boolean
    terms?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessId?: boolean
    business?: boolean | Discount$businessArgs<ExtArgs>
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    images?: boolean
    imageUrl?: boolean
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt?: boolean
    endAt?: boolean
    limitPerUser?: boolean
    limitTotal?: boolean
    usedTotal?: boolean
    terms?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessId?: boolean
  }

  export type DiscountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | Discount$businessArgs<ExtArgs>
    categories?: boolean | Discount$categoriesArgs<ExtArgs>
    redemptions?: boolean | Discount$redemptionsArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | Discount$businessArgs<ExtArgs>
  }

  export type $DiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discount"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs> | null
      categories: Prisma.$DiscountCategoryPayload<ExtArgs>[]
      redemptions: Prisma.$RedemptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string
      description: string
      images: string | null
      imageUrl: string | null
      tierBasic: boolean
      tierNormal: boolean
      tierPremium: boolean
      startAt: Date
      endAt: Date
      limitPerUser: number | null
      limitTotal: number | null
      usedTotal: number
      terms: string | null
      status: string
      createdAt: Date
      updatedAt: Date
      businessId: string | null
    }, ExtArgs["result"]["discount"]>
    composites: {}
  }

  type DiscountGetPayload<S extends boolean | null | undefined | DiscountDefaultArgs> = $Result.GetResult<Prisma.$DiscountPayload, S>

  type DiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiscountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiscountCountAggregateInputType | true
    }

  export interface DiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discount'], meta: { name: 'Discount' } }
    /**
     * Find zero or one Discount that matches the filter.
     * @param {DiscountFindUniqueArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountFindUniqueArgs>(args: SelectSubset<T, DiscountFindUniqueArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Discount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DiscountFindUniqueOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Discount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountFindFirstArgs>(args?: SelectSubset<T, DiscountFindFirstArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Discount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discount.findMany()
     * 
     * // Get first 10 Discounts
     * const discounts = await prisma.discount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountWithIdOnly = await prisma.discount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscountFindManyArgs>(args?: SelectSubset<T, DiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Discount.
     * @param {DiscountCreateArgs} args - Arguments to create a Discount.
     * @example
     * // Create one Discount
     * const Discount = await prisma.discount.create({
     *   data: {
     *     // ... data to create a Discount
     *   }
     * })
     * 
     */
    create<T extends DiscountCreateArgs>(args: SelectSubset<T, DiscountCreateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Discounts.
     * @param {DiscountCreateManyArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountCreateManyArgs>(args?: SelectSubset<T, DiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discounts and returns the data saved in the database.
     * @param {DiscountCreateManyAndReturnArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discounts and only return the `id`
     * const discountWithIdOnly = await prisma.discount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscountCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Discount.
     * @param {DiscountDeleteArgs} args - Arguments to delete one Discount.
     * @example
     * // Delete one Discount
     * const Discount = await prisma.discount.delete({
     *   where: {
     *     // ... filter to delete one Discount
     *   }
     * })
     * 
     */
    delete<T extends DiscountDeleteArgs>(args: SelectSubset<T, DiscountDeleteArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Discount.
     * @param {DiscountUpdateArgs} args - Arguments to update one Discount.
     * @example
     * // Update one Discount
     * const discount = await prisma.discount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountUpdateArgs>(args: SelectSubset<T, DiscountUpdateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Discounts.
     * @param {DiscountDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountDeleteManyArgs>(args?: SelectSubset<T, DiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountUpdateManyArgs>(args: SelectSubset<T, DiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Discount.
     * @param {DiscountUpsertArgs} args - Arguments to update or create a Discount.
     * @example
     * // Update or create a Discount
     * const discount = await prisma.discount.upsert({
     *   create: {
     *     // ... data to create a Discount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discount we want to update
     *   }
     * })
     */
    upsert<T extends DiscountUpsertArgs>(args: SelectSubset<T, DiscountUpsertArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discount.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
    **/
    count<T extends DiscountCountArgs>(
      args?: Subset<T, DiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscountAggregateArgs>(args: Subset<T, DiscountAggregateArgs>): Prisma.PrismaPromise<GetDiscountAggregateType<T>>

    /**
     * Group by Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountGroupByArgs['orderBy'] }
        : { orderBy?: DiscountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discount model
   */
  readonly fields: DiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends Discount$businessArgs<ExtArgs> = {}>(args?: Subset<T, Discount$businessArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    categories<T extends Discount$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Discount$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    redemptions<T extends Discount$redemptionsArgs<ExtArgs> = {}>(args?: Subset<T, Discount$redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Discount model
   */ 
  interface DiscountFieldRefs {
    readonly id: FieldRef<"Discount", 'String'>
    readonly code: FieldRef<"Discount", 'String'>
    readonly title: FieldRef<"Discount", 'String'>
    readonly description: FieldRef<"Discount", 'String'>
    readonly images: FieldRef<"Discount", 'String'>
    readonly imageUrl: FieldRef<"Discount", 'String'>
    readonly tierBasic: FieldRef<"Discount", 'Boolean'>
    readonly tierNormal: FieldRef<"Discount", 'Boolean'>
    readonly tierPremium: FieldRef<"Discount", 'Boolean'>
    readonly startAt: FieldRef<"Discount", 'DateTime'>
    readonly endAt: FieldRef<"Discount", 'DateTime'>
    readonly limitPerUser: FieldRef<"Discount", 'Int'>
    readonly limitTotal: FieldRef<"Discount", 'Int'>
    readonly usedTotal: FieldRef<"Discount", 'Int'>
    readonly terms: FieldRef<"Discount", 'String'>
    readonly status: FieldRef<"Discount", 'String'>
    readonly createdAt: FieldRef<"Discount", 'DateTime'>
    readonly updatedAt: FieldRef<"Discount", 'DateTime'>
    readonly businessId: FieldRef<"Discount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Discount findUnique
   */
  export type DiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findUniqueOrThrow
   */
  export type DiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findFirst
   */
  export type DiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findFirstOrThrow
   */
  export type DiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findMany
   */
  export type DiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discounts to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount create
   */
  export type DiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to create a Discount.
     */
    data: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
  }

  /**
   * Discount createMany
   */
  export type DiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
  }

  /**
   * Discount createManyAndReturn
   */
  export type DiscountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discount update
   */
  export type DiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to update a Discount.
     */
    data: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
    /**
     * Choose, which Discount to update.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount updateMany
   */
  export type DiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discounts.
     */
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput
  }

  /**
   * Discount upsert
   */
  export type DiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The filter to search for the Discount to update in case it exists.
     */
    where: DiscountWhereUniqueInput
    /**
     * In case the Discount found by the `where` argument doesn't exist, create a new Discount with this data.
     */
    create: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
    /**
     * In case the Discount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
  }

  /**
   * Discount delete
   */
  export type DiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter which Discount to delete.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount deleteMany
   */
  export type DiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discounts to delete
     */
    where?: DiscountWhereInput
  }

  /**
   * Discount.business
   */
  export type Discount$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
  }

  /**
   * Discount.categories
   */
  export type Discount$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    where?: DiscountCategoryWhereInput
    orderBy?: DiscountCategoryOrderByWithRelationInput | DiscountCategoryOrderByWithRelationInput[]
    cursor?: DiscountCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscountCategoryScalarFieldEnum | DiscountCategoryScalarFieldEnum[]
  }

  /**
   * Discount.redemptions
   */
  export type Discount$redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    where?: RedemptionWhereInput
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    cursor?: RedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * Discount without action
   */
  export type DiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
  }


  /**
   * Model Redemption
   */

  export type AggregateRedemption = {
    _count: RedemptionCountAggregateOutputType | null
    _min: RedemptionMinAggregateOutputType | null
    _max: RedemptionMaxAggregateOutputType | null
  }

  export type RedemptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    discountId: string | null
    businessId: string | null
    redeemedAt: Date | null
    channel: string | null
    meta: string | null
  }

  export type RedemptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    discountId: string | null
    businessId: string | null
    redeemedAt: Date | null
    channel: string | null
    meta: string | null
  }

  export type RedemptionCountAggregateOutputType = {
    id: number
    userId: number
    discountId: number
    businessId: number
    redeemedAt: number
    channel: number
    meta: number
    _all: number
  }


  export type RedemptionMinAggregateInputType = {
    id?: true
    userId?: true
    discountId?: true
    businessId?: true
    redeemedAt?: true
    channel?: true
    meta?: true
  }

  export type RedemptionMaxAggregateInputType = {
    id?: true
    userId?: true
    discountId?: true
    businessId?: true
    redeemedAt?: true
    channel?: true
    meta?: true
  }

  export type RedemptionCountAggregateInputType = {
    id?: true
    userId?: true
    discountId?: true
    businessId?: true
    redeemedAt?: true
    channel?: true
    meta?: true
    _all?: true
  }

  export type RedemptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Redemption to aggregate.
     */
    where?: RedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Redemptions to fetch.
     */
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Redemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Redemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Redemptions
    **/
    _count?: true | RedemptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedemptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedemptionMaxAggregateInputType
  }

  export type GetRedemptionAggregateType<T extends RedemptionAggregateArgs> = {
        [P in keyof T & keyof AggregateRedemption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedemption[P]>
      : GetScalarType<T[P], AggregateRedemption[P]>
  }




  export type RedemptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionWhereInput
    orderBy?: RedemptionOrderByWithAggregationInput | RedemptionOrderByWithAggregationInput[]
    by: RedemptionScalarFieldEnum[] | RedemptionScalarFieldEnum
    having?: RedemptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedemptionCountAggregateInputType | true
    _min?: RedemptionMinAggregateInputType
    _max?: RedemptionMaxAggregateInputType
  }

  export type RedemptionGroupByOutputType = {
    id: string
    userId: string
    discountId: string
    businessId: string
    redeemedAt: Date
    channel: string
    meta: string | null
    _count: RedemptionCountAggregateOutputType | null
    _min: RedemptionMinAggregateOutputType | null
    _max: RedemptionMaxAggregateOutputType | null
  }

  type GetRedemptionGroupByPayload<T extends RedemptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RedemptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedemptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedemptionGroupByOutputType[P]>
            : GetScalarType<T[P], RedemptionGroupByOutputType[P]>
        }
      >
    >


  export type RedemptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    discountId?: boolean
    businessId?: boolean
    redeemedAt?: boolean
    channel?: boolean
    meta?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    discount?: boolean | DiscountDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption"]>

  export type RedemptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    discountId?: boolean
    businessId?: boolean
    redeemedAt?: boolean
    channel?: boolean
    meta?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    discount?: boolean | DiscountDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption"]>

  export type RedemptionSelectScalar = {
    id?: boolean
    userId?: boolean
    discountId?: boolean
    businessId?: boolean
    redeemedAt?: boolean
    channel?: boolean
    meta?: boolean
  }

  export type RedemptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    discount?: boolean | DiscountDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type RedemptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    discount?: boolean | DiscountDefaultArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $RedemptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Redemption"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      discount: Prisma.$DiscountPayload<ExtArgs>
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      discountId: string
      businessId: string
      redeemedAt: Date
      channel: string
      meta: string | null
    }, ExtArgs["result"]["redemption"]>
    composites: {}
  }

  type RedemptionGetPayload<S extends boolean | null | undefined | RedemptionDefaultArgs> = $Result.GetResult<Prisma.$RedemptionPayload, S>

  type RedemptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RedemptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RedemptionCountAggregateInputType | true
    }

  export interface RedemptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Redemption'], meta: { name: 'Redemption' } }
    /**
     * Find zero or one Redemption that matches the filter.
     * @param {RedemptionFindUniqueArgs} args - Arguments to find a Redemption
     * @example
     * // Get one Redemption
     * const redemption = await prisma.redemption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RedemptionFindUniqueArgs>(args: SelectSubset<T, RedemptionFindUniqueArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Redemption that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RedemptionFindUniqueOrThrowArgs} args - Arguments to find a Redemption
     * @example
     * // Get one Redemption
     * const redemption = await prisma.redemption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RedemptionFindUniqueOrThrowArgs>(args: SelectSubset<T, RedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Redemption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionFindFirstArgs} args - Arguments to find a Redemption
     * @example
     * // Get one Redemption
     * const redemption = await prisma.redemption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RedemptionFindFirstArgs>(args?: SelectSubset<T, RedemptionFindFirstArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Redemption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionFindFirstOrThrowArgs} args - Arguments to find a Redemption
     * @example
     * // Get one Redemption
     * const redemption = await prisma.redemption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RedemptionFindFirstOrThrowArgs>(args?: SelectSubset<T, RedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Redemptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Redemptions
     * const redemptions = await prisma.redemption.findMany()
     * 
     * // Get first 10 Redemptions
     * const redemptions = await prisma.redemption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redemptionWithIdOnly = await prisma.redemption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RedemptionFindManyArgs>(args?: SelectSubset<T, RedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Redemption.
     * @param {RedemptionCreateArgs} args - Arguments to create a Redemption.
     * @example
     * // Create one Redemption
     * const Redemption = await prisma.redemption.create({
     *   data: {
     *     // ... data to create a Redemption
     *   }
     * })
     * 
     */
    create<T extends RedemptionCreateArgs>(args: SelectSubset<T, RedemptionCreateArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Redemptions.
     * @param {RedemptionCreateManyArgs} args - Arguments to create many Redemptions.
     * @example
     * // Create many Redemptions
     * const redemption = await prisma.redemption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RedemptionCreateManyArgs>(args?: SelectSubset<T, RedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Redemptions and returns the data saved in the database.
     * @param {RedemptionCreateManyAndReturnArgs} args - Arguments to create many Redemptions.
     * @example
     * // Create many Redemptions
     * const redemption = await prisma.redemption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Redemptions and only return the `id`
     * const redemptionWithIdOnly = await prisma.redemption.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RedemptionCreateManyAndReturnArgs>(args?: SelectSubset<T, RedemptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Redemption.
     * @param {RedemptionDeleteArgs} args - Arguments to delete one Redemption.
     * @example
     * // Delete one Redemption
     * const Redemption = await prisma.redemption.delete({
     *   where: {
     *     // ... filter to delete one Redemption
     *   }
     * })
     * 
     */
    delete<T extends RedemptionDeleteArgs>(args: SelectSubset<T, RedemptionDeleteArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Redemption.
     * @param {RedemptionUpdateArgs} args - Arguments to update one Redemption.
     * @example
     * // Update one Redemption
     * const redemption = await prisma.redemption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RedemptionUpdateArgs>(args: SelectSubset<T, RedemptionUpdateArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Redemptions.
     * @param {RedemptionDeleteManyArgs} args - Arguments to filter Redemptions to delete.
     * @example
     * // Delete a few Redemptions
     * const { count } = await prisma.redemption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RedemptionDeleteManyArgs>(args?: SelectSubset<T, RedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Redemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Redemptions
     * const redemption = await prisma.redemption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RedemptionUpdateManyArgs>(args: SelectSubset<T, RedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Redemption.
     * @param {RedemptionUpsertArgs} args - Arguments to update or create a Redemption.
     * @example
     * // Update or create a Redemption
     * const redemption = await prisma.redemption.upsert({
     *   create: {
     *     // ... data to create a Redemption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Redemption we want to update
     *   }
     * })
     */
    upsert<T extends RedemptionUpsertArgs>(args: SelectSubset<T, RedemptionUpsertArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Redemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionCountArgs} args - Arguments to filter Redemptions to count.
     * @example
     * // Count the number of Redemptions
     * const count = await prisma.redemption.count({
     *   where: {
     *     // ... the filter for the Redemptions we want to count
     *   }
     * })
    **/
    count<T extends RedemptionCountArgs>(
      args?: Subset<T, RedemptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedemptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Redemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RedemptionAggregateArgs>(args: Subset<T, RedemptionAggregateArgs>): Prisma.PrismaPromise<GetRedemptionAggregateType<T>>

    /**
     * Group by Redemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RedemptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedemptionGroupByArgs['orderBy'] }
        : { orderBy?: RedemptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Redemption model
   */
  readonly fields: RedemptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Redemption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RedemptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    discount<T extends DiscountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscountDefaultArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Redemption model
   */ 
  interface RedemptionFieldRefs {
    readonly id: FieldRef<"Redemption", 'String'>
    readonly userId: FieldRef<"Redemption", 'String'>
    readonly discountId: FieldRef<"Redemption", 'String'>
    readonly businessId: FieldRef<"Redemption", 'String'>
    readonly redeemedAt: FieldRef<"Redemption", 'DateTime'>
    readonly channel: FieldRef<"Redemption", 'String'>
    readonly meta: FieldRef<"Redemption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Redemption findUnique
   */
  export type RedemptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemption to fetch.
     */
    where: RedemptionWhereUniqueInput
  }

  /**
   * Redemption findUniqueOrThrow
   */
  export type RedemptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemption to fetch.
     */
    where: RedemptionWhereUniqueInput
  }

  /**
   * Redemption findFirst
   */
  export type RedemptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemption to fetch.
     */
    where?: RedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Redemptions to fetch.
     */
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Redemptions.
     */
    cursor?: RedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Redemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Redemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Redemptions.
     */
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * Redemption findFirstOrThrow
   */
  export type RedemptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemption to fetch.
     */
    where?: RedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Redemptions to fetch.
     */
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Redemptions.
     */
    cursor?: RedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Redemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Redemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Redemptions.
     */
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * Redemption findMany
   */
  export type RedemptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemptions to fetch.
     */
    where?: RedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Redemptions to fetch.
     */
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Redemptions.
     */
    cursor?: RedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Redemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Redemptions.
     */
    skip?: number
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * Redemption create
   */
  export type RedemptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Redemption.
     */
    data: XOR<RedemptionCreateInput, RedemptionUncheckedCreateInput>
  }

  /**
   * Redemption createMany
   */
  export type RedemptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Redemptions.
     */
    data: RedemptionCreateManyInput | RedemptionCreateManyInput[]
  }

  /**
   * Redemption createManyAndReturn
   */
  export type RedemptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Redemptions.
     */
    data: RedemptionCreateManyInput | RedemptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Redemption update
   */
  export type RedemptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Redemption.
     */
    data: XOR<RedemptionUpdateInput, RedemptionUncheckedUpdateInput>
    /**
     * Choose, which Redemption to update.
     */
    where: RedemptionWhereUniqueInput
  }

  /**
   * Redemption updateMany
   */
  export type RedemptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Redemptions.
     */
    data: XOR<RedemptionUpdateManyMutationInput, RedemptionUncheckedUpdateManyInput>
    /**
     * Filter which Redemptions to update
     */
    where?: RedemptionWhereInput
  }

  /**
   * Redemption upsert
   */
  export type RedemptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Redemption to update in case it exists.
     */
    where: RedemptionWhereUniqueInput
    /**
     * In case the Redemption found by the `where` argument doesn't exist, create a new Redemption with this data.
     */
    create: XOR<RedemptionCreateInput, RedemptionUncheckedCreateInput>
    /**
     * In case the Redemption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RedemptionUpdateInput, RedemptionUncheckedUpdateInput>
  }

  /**
   * Redemption delete
   */
  export type RedemptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter which Redemption to delete.
     */
    where: RedemptionWhereUniqueInput
  }

  /**
   * Redemption deleteMany
   */
  export type RedemptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Redemptions to delete
     */
    where?: RedemptionWhereInput
  }

  /**
   * Redemption without action
   */
  export type RedemptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    icon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    slug: string
    name: string
    icon: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discounts?: boolean | Category$discountsArgs<ExtArgs>
    businesses?: boolean | Category$businessesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discounts?: boolean | Category$discountsArgs<ExtArgs>
    businesses?: boolean | Category$businessesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      discounts: Prisma.$DiscountCategoryPayload<ExtArgs>[]
      businesses: Prisma.$BusinessCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      icon: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discounts<T extends Category$discountsArgs<ExtArgs> = {}>(args?: Subset<T, Category$discountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    businesses<T extends Category$businessesArgs<ExtArgs> = {}>(args?: Subset<T, Category$businessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.discounts
   */
  export type Category$discountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    where?: DiscountCategoryWhereInput
    orderBy?: DiscountCategoryOrderByWithRelationInput | DiscountCategoryOrderByWithRelationInput[]
    cursor?: DiscountCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscountCategoryScalarFieldEnum | DiscountCategoryScalarFieldEnum[]
  }

  /**
   * Category.businesses
   */
  export type Category$businessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    where?: BusinessCategoryWhereInput
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    cursor?: BusinessCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessCategoryScalarFieldEnum | BusinessCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model DiscountCategory
   */

  export type AggregateDiscountCategory = {
    _count: DiscountCategoryCountAggregateOutputType | null
    _min: DiscountCategoryMinAggregateOutputType | null
    _max: DiscountCategoryMaxAggregateOutputType | null
  }

  export type DiscountCategoryMinAggregateOutputType = {
    discountId: string | null
    categoryId: string | null
  }

  export type DiscountCategoryMaxAggregateOutputType = {
    discountId: string | null
    categoryId: string | null
  }

  export type DiscountCategoryCountAggregateOutputType = {
    discountId: number
    categoryId: number
    _all: number
  }


  export type DiscountCategoryMinAggregateInputType = {
    discountId?: true
    categoryId?: true
  }

  export type DiscountCategoryMaxAggregateInputType = {
    discountId?: true
    categoryId?: true
  }

  export type DiscountCategoryCountAggregateInputType = {
    discountId?: true
    categoryId?: true
    _all?: true
  }

  export type DiscountCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscountCategory to aggregate.
     */
    where?: DiscountCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountCategories to fetch.
     */
    orderBy?: DiscountCategoryOrderByWithRelationInput | DiscountCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscountCategories
    **/
    _count?: true | DiscountCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountCategoryMaxAggregateInputType
  }

  export type GetDiscountCategoryAggregateType<T extends DiscountCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscountCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscountCategory[P]>
      : GetScalarType<T[P], AggregateDiscountCategory[P]>
  }




  export type DiscountCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountCategoryWhereInput
    orderBy?: DiscountCategoryOrderByWithAggregationInput | DiscountCategoryOrderByWithAggregationInput[]
    by: DiscountCategoryScalarFieldEnum[] | DiscountCategoryScalarFieldEnum
    having?: DiscountCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountCategoryCountAggregateInputType | true
    _min?: DiscountCategoryMinAggregateInputType
    _max?: DiscountCategoryMaxAggregateInputType
  }

  export type DiscountCategoryGroupByOutputType = {
    discountId: string
    categoryId: string
    _count: DiscountCategoryCountAggregateOutputType | null
    _min: DiscountCategoryMinAggregateOutputType | null
    _max: DiscountCategoryMaxAggregateOutputType | null
  }

  type GetDiscountCategoryGroupByPayload<T extends DiscountCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DiscountCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discountId?: boolean
    categoryId?: boolean
    discount?: boolean | DiscountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discountCategory"]>

  export type DiscountCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discountId?: boolean
    categoryId?: boolean
    discount?: boolean | DiscountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discountCategory"]>

  export type DiscountCategorySelectScalar = {
    discountId?: boolean
    categoryId?: boolean
  }

  export type DiscountCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | DiscountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type DiscountCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | DiscountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $DiscountCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscountCategory"
    objects: {
      discount: Prisma.$DiscountPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      discountId: string
      categoryId: string
    }, ExtArgs["result"]["discountCategory"]>
    composites: {}
  }

  type DiscountCategoryGetPayload<S extends boolean | null | undefined | DiscountCategoryDefaultArgs> = $Result.GetResult<Prisma.$DiscountCategoryPayload, S>

  type DiscountCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiscountCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiscountCategoryCountAggregateInputType | true
    }

  export interface DiscountCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscountCategory'], meta: { name: 'DiscountCategory' } }
    /**
     * Find zero or one DiscountCategory that matches the filter.
     * @param {DiscountCategoryFindUniqueArgs} args - Arguments to find a DiscountCategory
     * @example
     * // Get one DiscountCategory
     * const discountCategory = await prisma.discountCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountCategoryFindUniqueArgs>(args: SelectSubset<T, DiscountCategoryFindUniqueArgs<ExtArgs>>): Prisma__DiscountCategoryClient<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DiscountCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DiscountCategoryFindUniqueOrThrowArgs} args - Arguments to find a DiscountCategory
     * @example
     * // Get one DiscountCategory
     * const discountCategory = await prisma.discountCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountCategoryClient<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DiscountCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCategoryFindFirstArgs} args - Arguments to find a DiscountCategory
     * @example
     * // Get one DiscountCategory
     * const discountCategory = await prisma.discountCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountCategoryFindFirstArgs>(args?: SelectSubset<T, DiscountCategoryFindFirstArgs<ExtArgs>>): Prisma__DiscountCategoryClient<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DiscountCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCategoryFindFirstOrThrowArgs} args - Arguments to find a DiscountCategory
     * @example
     * // Get one DiscountCategory
     * const discountCategory = await prisma.discountCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountCategoryClient<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DiscountCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscountCategories
     * const discountCategories = await prisma.discountCategory.findMany()
     * 
     * // Get first 10 DiscountCategories
     * const discountCategories = await prisma.discountCategory.findMany({ take: 10 })
     * 
     * // Only select the `discountId`
     * const discountCategoryWithDiscountIdOnly = await prisma.discountCategory.findMany({ select: { discountId: true } })
     * 
     */
    findMany<T extends DiscountCategoryFindManyArgs>(args?: SelectSubset<T, DiscountCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DiscountCategory.
     * @param {DiscountCategoryCreateArgs} args - Arguments to create a DiscountCategory.
     * @example
     * // Create one DiscountCategory
     * const DiscountCategory = await prisma.discountCategory.create({
     *   data: {
     *     // ... data to create a DiscountCategory
     *   }
     * })
     * 
     */
    create<T extends DiscountCategoryCreateArgs>(args: SelectSubset<T, DiscountCategoryCreateArgs<ExtArgs>>): Prisma__DiscountCategoryClient<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DiscountCategories.
     * @param {DiscountCategoryCreateManyArgs} args - Arguments to create many DiscountCategories.
     * @example
     * // Create many DiscountCategories
     * const discountCategory = await prisma.discountCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountCategoryCreateManyArgs>(args?: SelectSubset<T, DiscountCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscountCategories and returns the data saved in the database.
     * @param {DiscountCategoryCreateManyAndReturnArgs} args - Arguments to create many DiscountCategories.
     * @example
     * // Create many DiscountCategories
     * const discountCategory = await prisma.discountCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscountCategories and only return the `discountId`
     * const discountCategoryWithDiscountIdOnly = await prisma.discountCategory.createManyAndReturn({ 
     *   select: { discountId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscountCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscountCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DiscountCategory.
     * @param {DiscountCategoryDeleteArgs} args - Arguments to delete one DiscountCategory.
     * @example
     * // Delete one DiscountCategory
     * const DiscountCategory = await prisma.discountCategory.delete({
     *   where: {
     *     // ... filter to delete one DiscountCategory
     *   }
     * })
     * 
     */
    delete<T extends DiscountCategoryDeleteArgs>(args: SelectSubset<T, DiscountCategoryDeleteArgs<ExtArgs>>): Prisma__DiscountCategoryClient<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DiscountCategory.
     * @param {DiscountCategoryUpdateArgs} args - Arguments to update one DiscountCategory.
     * @example
     * // Update one DiscountCategory
     * const discountCategory = await prisma.discountCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountCategoryUpdateArgs>(args: SelectSubset<T, DiscountCategoryUpdateArgs<ExtArgs>>): Prisma__DiscountCategoryClient<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DiscountCategories.
     * @param {DiscountCategoryDeleteManyArgs} args - Arguments to filter DiscountCategories to delete.
     * @example
     * // Delete a few DiscountCategories
     * const { count } = await prisma.discountCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountCategoryDeleteManyArgs>(args?: SelectSubset<T, DiscountCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscountCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscountCategories
     * const discountCategory = await prisma.discountCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountCategoryUpdateManyArgs>(args: SelectSubset<T, DiscountCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiscountCategory.
     * @param {DiscountCategoryUpsertArgs} args - Arguments to update or create a DiscountCategory.
     * @example
     * // Update or create a DiscountCategory
     * const discountCategory = await prisma.discountCategory.upsert({
     *   create: {
     *     // ... data to create a DiscountCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscountCategory we want to update
     *   }
     * })
     */
    upsert<T extends DiscountCategoryUpsertArgs>(args: SelectSubset<T, DiscountCategoryUpsertArgs<ExtArgs>>): Prisma__DiscountCategoryClient<$Result.GetResult<Prisma.$DiscountCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DiscountCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCategoryCountArgs} args - Arguments to filter DiscountCategories to count.
     * @example
     * // Count the number of DiscountCategories
     * const count = await prisma.discountCategory.count({
     *   where: {
     *     // ... the filter for the DiscountCategories we want to count
     *   }
     * })
    **/
    count<T extends DiscountCategoryCountArgs>(
      args?: Subset<T, DiscountCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscountCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscountCategoryAggregateArgs>(args: Subset<T, DiscountCategoryAggregateArgs>): Prisma.PrismaPromise<GetDiscountCategoryAggregateType<T>>

    /**
     * Group by DiscountCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscountCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DiscountCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscountCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscountCategory model
   */
  readonly fields: DiscountCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscountCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discount<T extends DiscountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscountDefaultArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiscountCategory model
   */ 
  interface DiscountCategoryFieldRefs {
    readonly discountId: FieldRef<"DiscountCategory", 'String'>
    readonly categoryId: FieldRef<"DiscountCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiscountCategory findUnique
   */
  export type DiscountCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiscountCategory to fetch.
     */
    where: DiscountCategoryWhereUniqueInput
  }

  /**
   * DiscountCategory findUniqueOrThrow
   */
  export type DiscountCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiscountCategory to fetch.
     */
    where: DiscountCategoryWhereUniqueInput
  }

  /**
   * DiscountCategory findFirst
   */
  export type DiscountCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiscountCategory to fetch.
     */
    where?: DiscountCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountCategories to fetch.
     */
    orderBy?: DiscountCategoryOrderByWithRelationInput | DiscountCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscountCategories.
     */
    cursor?: DiscountCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscountCategories.
     */
    distinct?: DiscountCategoryScalarFieldEnum | DiscountCategoryScalarFieldEnum[]
  }

  /**
   * DiscountCategory findFirstOrThrow
   */
  export type DiscountCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiscountCategory to fetch.
     */
    where?: DiscountCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountCategories to fetch.
     */
    orderBy?: DiscountCategoryOrderByWithRelationInput | DiscountCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscountCategories.
     */
    cursor?: DiscountCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscountCategories.
     */
    distinct?: DiscountCategoryScalarFieldEnum | DiscountCategoryScalarFieldEnum[]
  }

  /**
   * DiscountCategory findMany
   */
  export type DiscountCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiscountCategories to fetch.
     */
    where?: DiscountCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountCategories to fetch.
     */
    orderBy?: DiscountCategoryOrderByWithRelationInput | DiscountCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscountCategories.
     */
    cursor?: DiscountCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountCategories.
     */
    skip?: number
    distinct?: DiscountCategoryScalarFieldEnum | DiscountCategoryScalarFieldEnum[]
  }

  /**
   * DiscountCategory create
   */
  export type DiscountCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscountCategory.
     */
    data: XOR<DiscountCategoryCreateInput, DiscountCategoryUncheckedCreateInput>
  }

  /**
   * DiscountCategory createMany
   */
  export type DiscountCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscountCategories.
     */
    data: DiscountCategoryCreateManyInput | DiscountCategoryCreateManyInput[]
  }

  /**
   * DiscountCategory createManyAndReturn
   */
  export type DiscountCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DiscountCategories.
     */
    data: DiscountCategoryCreateManyInput | DiscountCategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscountCategory update
   */
  export type DiscountCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscountCategory.
     */
    data: XOR<DiscountCategoryUpdateInput, DiscountCategoryUncheckedUpdateInput>
    /**
     * Choose, which DiscountCategory to update.
     */
    where: DiscountCategoryWhereUniqueInput
  }

  /**
   * DiscountCategory updateMany
   */
  export type DiscountCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscountCategories.
     */
    data: XOR<DiscountCategoryUpdateManyMutationInput, DiscountCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DiscountCategories to update
     */
    where?: DiscountCategoryWhereInput
  }

  /**
   * DiscountCategory upsert
   */
  export type DiscountCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscountCategory to update in case it exists.
     */
    where: DiscountCategoryWhereUniqueInput
    /**
     * In case the DiscountCategory found by the `where` argument doesn't exist, create a new DiscountCategory with this data.
     */
    create: XOR<DiscountCategoryCreateInput, DiscountCategoryUncheckedCreateInput>
    /**
     * In case the DiscountCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountCategoryUpdateInput, DiscountCategoryUncheckedUpdateInput>
  }

  /**
   * DiscountCategory delete
   */
  export type DiscountCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
    /**
     * Filter which DiscountCategory to delete.
     */
    where: DiscountCategoryWhereUniqueInput
  }

  /**
   * DiscountCategory deleteMany
   */
  export type DiscountCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscountCategories to delete
     */
    where?: DiscountCategoryWhereInput
  }

  /**
   * DiscountCategory without action
   */
  export type DiscountCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCategory
     */
    select?: DiscountCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountCategoryInclude<ExtArgs> | null
  }


  /**
   * Model BusinessCategory
   */

  export type AggregateBusinessCategory = {
    _count: BusinessCategoryCountAggregateOutputType | null
    _min: BusinessCategoryMinAggregateOutputType | null
    _max: BusinessCategoryMaxAggregateOutputType | null
  }

  export type BusinessCategoryMinAggregateOutputType = {
    businessId: string | null
    categoryId: string | null
  }

  export type BusinessCategoryMaxAggregateOutputType = {
    businessId: string | null
    categoryId: string | null
  }

  export type BusinessCategoryCountAggregateOutputType = {
    businessId: number
    categoryId: number
    _all: number
  }


  export type BusinessCategoryMinAggregateInputType = {
    businessId?: true
    categoryId?: true
  }

  export type BusinessCategoryMaxAggregateInputType = {
    businessId?: true
    categoryId?: true
  }

  export type BusinessCategoryCountAggregateInputType = {
    businessId?: true
    categoryId?: true
    _all?: true
  }

  export type BusinessCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessCategory to aggregate.
     */
    where?: BusinessCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCategories to fetch.
     */
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessCategories
    **/
    _count?: true | BusinessCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessCategoryMaxAggregateInputType
  }

  export type GetBusinessCategoryAggregateType<T extends BusinessCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessCategory[P]>
      : GetScalarType<T[P], AggregateBusinessCategory[P]>
  }




  export type BusinessCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessCategoryWhereInput
    orderBy?: BusinessCategoryOrderByWithAggregationInput | BusinessCategoryOrderByWithAggregationInput[]
    by: BusinessCategoryScalarFieldEnum[] | BusinessCategoryScalarFieldEnum
    having?: BusinessCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCategoryCountAggregateInputType | true
    _min?: BusinessCategoryMinAggregateInputType
    _max?: BusinessCategoryMaxAggregateInputType
  }

  export type BusinessCategoryGroupByOutputType = {
    businessId: string
    categoryId: string
    _count: BusinessCategoryCountAggregateOutputType | null
    _min: BusinessCategoryMinAggregateOutputType | null
    _max: BusinessCategoryMaxAggregateOutputType | null
  }

  type GetBusinessCategoryGroupByPayload<T extends BusinessCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BusinessCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    businessId?: boolean
    categoryId?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessCategory"]>

  export type BusinessCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    businessId?: boolean
    categoryId?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessCategory"]>

  export type BusinessCategorySelectScalar = {
    businessId?: boolean
    categoryId?: boolean
  }

  export type BusinessCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type BusinessCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $BusinessCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessCategory"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      businessId: string
      categoryId: string
    }, ExtArgs["result"]["businessCategory"]>
    composites: {}
  }

  type BusinessCategoryGetPayload<S extends boolean | null | undefined | BusinessCategoryDefaultArgs> = $Result.GetResult<Prisma.$BusinessCategoryPayload, S>

  type BusinessCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BusinessCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BusinessCategoryCountAggregateInputType | true
    }

  export interface BusinessCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessCategory'], meta: { name: 'BusinessCategory' } }
    /**
     * Find zero or one BusinessCategory that matches the filter.
     * @param {BusinessCategoryFindUniqueArgs} args - Arguments to find a BusinessCategory
     * @example
     * // Get one BusinessCategory
     * const businessCategory = await prisma.businessCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessCategoryFindUniqueArgs>(args: SelectSubset<T, BusinessCategoryFindUniqueArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BusinessCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BusinessCategoryFindUniqueOrThrowArgs} args - Arguments to find a BusinessCategory
     * @example
     * // Get one BusinessCategory
     * const businessCategory = await prisma.businessCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BusinessCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryFindFirstArgs} args - Arguments to find a BusinessCategory
     * @example
     * // Get one BusinessCategory
     * const businessCategory = await prisma.businessCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessCategoryFindFirstArgs>(args?: SelectSubset<T, BusinessCategoryFindFirstArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BusinessCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryFindFirstOrThrowArgs} args - Arguments to find a BusinessCategory
     * @example
     * // Get one BusinessCategory
     * const businessCategory = await prisma.businessCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BusinessCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessCategories
     * const businessCategories = await prisma.businessCategory.findMany()
     * 
     * // Get first 10 BusinessCategories
     * const businessCategories = await prisma.businessCategory.findMany({ take: 10 })
     * 
     * // Only select the `businessId`
     * const businessCategoryWithBusinessIdOnly = await prisma.businessCategory.findMany({ select: { businessId: true } })
     * 
     */
    findMany<T extends BusinessCategoryFindManyArgs>(args?: SelectSubset<T, BusinessCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BusinessCategory.
     * @param {BusinessCategoryCreateArgs} args - Arguments to create a BusinessCategory.
     * @example
     * // Create one BusinessCategory
     * const BusinessCategory = await prisma.businessCategory.create({
     *   data: {
     *     // ... data to create a BusinessCategory
     *   }
     * })
     * 
     */
    create<T extends BusinessCategoryCreateArgs>(args: SelectSubset<T, BusinessCategoryCreateArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BusinessCategories.
     * @param {BusinessCategoryCreateManyArgs} args - Arguments to create many BusinessCategories.
     * @example
     * // Create many BusinessCategories
     * const businessCategory = await prisma.businessCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCategoryCreateManyArgs>(args?: SelectSubset<T, BusinessCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessCategories and returns the data saved in the database.
     * @param {BusinessCategoryCreateManyAndReturnArgs} args - Arguments to create many BusinessCategories.
     * @example
     * // Create many BusinessCategories
     * const businessCategory = await prisma.businessCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessCategories and only return the `businessId`
     * const businessCategoryWithBusinessIdOnly = await prisma.businessCategory.createManyAndReturn({ 
     *   select: { businessId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BusinessCategory.
     * @param {BusinessCategoryDeleteArgs} args - Arguments to delete one BusinessCategory.
     * @example
     * // Delete one BusinessCategory
     * const BusinessCategory = await prisma.businessCategory.delete({
     *   where: {
     *     // ... filter to delete one BusinessCategory
     *   }
     * })
     * 
     */
    delete<T extends BusinessCategoryDeleteArgs>(args: SelectSubset<T, BusinessCategoryDeleteArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BusinessCategory.
     * @param {BusinessCategoryUpdateArgs} args - Arguments to update one BusinessCategory.
     * @example
     * // Update one BusinessCategory
     * const businessCategory = await prisma.businessCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessCategoryUpdateArgs>(args: SelectSubset<T, BusinessCategoryUpdateArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BusinessCategories.
     * @param {BusinessCategoryDeleteManyArgs} args - Arguments to filter BusinessCategories to delete.
     * @example
     * // Delete a few BusinessCategories
     * const { count } = await prisma.businessCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessCategoryDeleteManyArgs>(args?: SelectSubset<T, BusinessCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessCategories
     * const businessCategory = await prisma.businessCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessCategoryUpdateManyArgs>(args: SelectSubset<T, BusinessCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessCategory.
     * @param {BusinessCategoryUpsertArgs} args - Arguments to update or create a BusinessCategory.
     * @example
     * // Update or create a BusinessCategory
     * const businessCategory = await prisma.businessCategory.upsert({
     *   create: {
     *     // ... data to create a BusinessCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessCategory we want to update
     *   }
     * })
     */
    upsert<T extends BusinessCategoryUpsertArgs>(args: SelectSubset<T, BusinessCategoryUpsertArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BusinessCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryCountArgs} args - Arguments to filter BusinessCategories to count.
     * @example
     * // Count the number of BusinessCategories
     * const count = await prisma.businessCategory.count({
     *   where: {
     *     // ... the filter for the BusinessCategories we want to count
     *   }
     * })
    **/
    count<T extends BusinessCategoryCountArgs>(
      args?: Subset<T, BusinessCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessCategoryAggregateArgs>(args: Subset<T, BusinessCategoryAggregateArgs>): Prisma.PrismaPromise<GetBusinessCategoryAggregateType<T>>

    /**
     * Group by BusinessCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BusinessCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessCategory model
   */
  readonly fields: BusinessCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessCategory model
   */ 
  interface BusinessCategoryFieldRefs {
    readonly businessId: FieldRef<"BusinessCategory", 'String'>
    readonly categoryId: FieldRef<"BusinessCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessCategory findUnique
   */
  export type BusinessCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategory to fetch.
     */
    where: BusinessCategoryWhereUniqueInput
  }

  /**
   * BusinessCategory findUniqueOrThrow
   */
  export type BusinessCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategory to fetch.
     */
    where: BusinessCategoryWhereUniqueInput
  }

  /**
   * BusinessCategory findFirst
   */
  export type BusinessCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategory to fetch.
     */
    where?: BusinessCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCategories to fetch.
     */
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCategories.
     */
    cursor?: BusinessCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCategories.
     */
    distinct?: BusinessCategoryScalarFieldEnum | BusinessCategoryScalarFieldEnum[]
  }

  /**
   * BusinessCategory findFirstOrThrow
   */
  export type BusinessCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategory to fetch.
     */
    where?: BusinessCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCategories to fetch.
     */
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCategories.
     */
    cursor?: BusinessCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCategories.
     */
    distinct?: BusinessCategoryScalarFieldEnum | BusinessCategoryScalarFieldEnum[]
  }

  /**
   * BusinessCategory findMany
   */
  export type BusinessCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategories to fetch.
     */
    where?: BusinessCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCategories to fetch.
     */
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessCategories.
     */
    cursor?: BusinessCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCategories.
     */
    skip?: number
    distinct?: BusinessCategoryScalarFieldEnum | BusinessCategoryScalarFieldEnum[]
  }

  /**
   * BusinessCategory create
   */
  export type BusinessCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessCategory.
     */
    data: XOR<BusinessCategoryCreateInput, BusinessCategoryUncheckedCreateInput>
  }

  /**
   * BusinessCategory createMany
   */
  export type BusinessCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessCategories.
     */
    data: BusinessCategoryCreateManyInput | BusinessCategoryCreateManyInput[]
  }

  /**
   * BusinessCategory createManyAndReturn
   */
  export type BusinessCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BusinessCategories.
     */
    data: BusinessCategoryCreateManyInput | BusinessCategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessCategory update
   */
  export type BusinessCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessCategory.
     */
    data: XOR<BusinessCategoryUpdateInput, BusinessCategoryUncheckedUpdateInput>
    /**
     * Choose, which BusinessCategory to update.
     */
    where: BusinessCategoryWhereUniqueInput
  }

  /**
   * BusinessCategory updateMany
   */
  export type BusinessCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessCategories.
     */
    data: XOR<BusinessCategoryUpdateManyMutationInput, BusinessCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BusinessCategories to update
     */
    where?: BusinessCategoryWhereInput
  }

  /**
   * BusinessCategory upsert
   */
  export type BusinessCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessCategory to update in case it exists.
     */
    where: BusinessCategoryWhereUniqueInput
    /**
     * In case the BusinessCategory found by the `where` argument doesn't exist, create a new BusinessCategory with this data.
     */
    create: XOR<BusinessCategoryCreateInput, BusinessCategoryUncheckedCreateInput>
    /**
     * In case the BusinessCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessCategoryUpdateInput, BusinessCategoryUncheckedUpdateInput>
  }

  /**
   * BusinessCategory delete
   */
  export type BusinessCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter which BusinessCategory to delete.
     */
    where: BusinessCategoryWhereUniqueInput
  }

  /**
   * BusinessCategory deleteMany
   */
  export type BusinessCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessCategories to delete
     */
    where?: BusinessCategoryWhereInput
  }

  /**
   * BusinessCategory without action
   */
  export type BusinessCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    tier: 'tier',
    status: 'status',
    role: 'role',
    tokenVersion: 'tokenVersion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    ruc: 'ruc',
    address: 'address',
    contact: 'contact',
    status: 'status',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const DiscountScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    description: 'description',
    images: 'images',
    imageUrl: 'imageUrl',
    tierBasic: 'tierBasic',
    tierNormal: 'tierNormal',
    tierPremium: 'tierPremium',
    startAt: 'startAt',
    endAt: 'endAt',
    limitPerUser: 'limitPerUser',
    limitTotal: 'limitTotal',
    usedTotal: 'usedTotal',
    terms: 'terms',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    businessId: 'businessId'
  };

  export type DiscountScalarFieldEnum = (typeof DiscountScalarFieldEnum)[keyof typeof DiscountScalarFieldEnum]


  export const RedemptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    discountId: 'discountId',
    businessId: 'businessId',
    redeemedAt: 'redeemedAt',
    channel: 'channel',
    meta: 'meta'
  };

  export type RedemptionScalarFieldEnum = (typeof RedemptionScalarFieldEnum)[keyof typeof RedemptionScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const DiscountCategoryScalarFieldEnum: {
    discountId: 'discountId',
    categoryId: 'categoryId'
  };

  export type DiscountCategoryScalarFieldEnum = (typeof DiscountCategoryScalarFieldEnum)[keyof typeof DiscountCategoryScalarFieldEnum]


  export const BusinessCategoryScalarFieldEnum: {
    businessId: 'businessId',
    categoryId: 'categoryId'
  };

  export type BusinessCategoryScalarFieldEnum = (typeof BusinessCategoryScalarFieldEnum)[keyof typeof BusinessCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    tier?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    tokenVersion?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    redemptions?: RedemptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    role?: SortOrder
    tokenVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    redemptions?: RedemptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    tier?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    tokenVersion?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    redemptions?: RedemptionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    role?: SortOrder
    tokenVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    tier?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    tokenVersion?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: StringFilter<"Business"> | string
    code?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    ruc?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    contact?: StringNullableFilter<"Business"> | string | null
    status?: StringFilter<"Business"> | string
    imageUrl?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    discounts?: DiscountListRelationFilter
    categories?: BusinessCategoryListRelationFilter
    redemptions?: RedemptionListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    ruc?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    status?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discounts?: DiscountOrderByRelationAggregateInput
    categories?: BusinessCategoryOrderByRelationAggregateInput
    redemptions?: RedemptionOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    ruc?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    contact?: StringNullableFilter<"Business"> | string | null
    status?: StringFilter<"Business"> | string
    imageUrl?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    discounts?: DiscountListRelationFilter
    categories?: BusinessCategoryListRelationFilter
    redemptions?: RedemptionListRelationFilter
  }, "id" | "code">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    ruc?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    status?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Business"> | string
    code?: StringWithAggregatesFilter<"Business"> | string
    name?: StringWithAggregatesFilter<"Business"> | string
    ruc?: StringNullableWithAggregatesFilter<"Business"> | string | null
    address?: StringNullableWithAggregatesFilter<"Business"> | string | null
    contact?: StringNullableWithAggregatesFilter<"Business"> | string | null
    status?: StringWithAggregatesFilter<"Business"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Business"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type DiscountWhereInput = {
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    id?: StringFilter<"Discount"> | string
    code?: StringFilter<"Discount"> | string
    title?: StringFilter<"Discount"> | string
    description?: StringFilter<"Discount"> | string
    images?: StringNullableFilter<"Discount"> | string | null
    imageUrl?: StringNullableFilter<"Discount"> | string | null
    tierBasic?: BoolFilter<"Discount"> | boolean
    tierNormal?: BoolFilter<"Discount"> | boolean
    tierPremium?: BoolFilter<"Discount"> | boolean
    startAt?: DateTimeFilter<"Discount"> | Date | string
    endAt?: DateTimeFilter<"Discount"> | Date | string
    limitPerUser?: IntNullableFilter<"Discount"> | number | null
    limitTotal?: IntNullableFilter<"Discount"> | number | null
    usedTotal?: IntFilter<"Discount"> | number
    terms?: StringNullableFilter<"Discount"> | string | null
    status?: StringFilter<"Discount"> | string
    createdAt?: DateTimeFilter<"Discount"> | Date | string
    updatedAt?: DateTimeFilter<"Discount"> | Date | string
    businessId?: StringNullableFilter<"Discount"> | string | null
    business?: XOR<BusinessNullableRelationFilter, BusinessWhereInput> | null
    categories?: DiscountCategoryListRelationFilter
    redemptions?: RedemptionListRelationFilter
  }

  export type DiscountOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tierBasic?: SortOrder
    tierNormal?: SortOrder
    tierPremium?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    limitPerUser?: SortOrderInput | SortOrder
    limitTotal?: SortOrderInput | SortOrder
    usedTotal?: SortOrder
    terms?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrderInput | SortOrder
    business?: BusinessOrderByWithRelationInput
    categories?: DiscountCategoryOrderByRelationAggregateInput
    redemptions?: RedemptionOrderByRelationAggregateInput
  }

  export type DiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    title?: StringFilter<"Discount"> | string
    description?: StringFilter<"Discount"> | string
    images?: StringNullableFilter<"Discount"> | string | null
    imageUrl?: StringNullableFilter<"Discount"> | string | null
    tierBasic?: BoolFilter<"Discount"> | boolean
    tierNormal?: BoolFilter<"Discount"> | boolean
    tierPremium?: BoolFilter<"Discount"> | boolean
    startAt?: DateTimeFilter<"Discount"> | Date | string
    endAt?: DateTimeFilter<"Discount"> | Date | string
    limitPerUser?: IntNullableFilter<"Discount"> | number | null
    limitTotal?: IntNullableFilter<"Discount"> | number | null
    usedTotal?: IntFilter<"Discount"> | number
    terms?: StringNullableFilter<"Discount"> | string | null
    status?: StringFilter<"Discount"> | string
    createdAt?: DateTimeFilter<"Discount"> | Date | string
    updatedAt?: DateTimeFilter<"Discount"> | Date | string
    businessId?: StringNullableFilter<"Discount"> | string | null
    business?: XOR<BusinessNullableRelationFilter, BusinessWhereInput> | null
    categories?: DiscountCategoryListRelationFilter
    redemptions?: RedemptionListRelationFilter
  }, "id" | "code">

  export type DiscountOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tierBasic?: SortOrder
    tierNormal?: SortOrder
    tierPremium?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    limitPerUser?: SortOrderInput | SortOrder
    limitTotal?: SortOrderInput | SortOrder
    usedTotal?: SortOrder
    terms?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrderInput | SortOrder
    _count?: DiscountCountOrderByAggregateInput
    _avg?: DiscountAvgOrderByAggregateInput
    _max?: DiscountMaxOrderByAggregateInput
    _min?: DiscountMinOrderByAggregateInput
    _sum?: DiscountSumOrderByAggregateInput
  }

  export type DiscountScalarWhereWithAggregatesInput = {
    AND?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    OR?: DiscountScalarWhereWithAggregatesInput[]
    NOT?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discount"> | string
    code?: StringWithAggregatesFilter<"Discount"> | string
    title?: StringWithAggregatesFilter<"Discount"> | string
    description?: StringWithAggregatesFilter<"Discount"> | string
    images?: StringNullableWithAggregatesFilter<"Discount"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Discount"> | string | null
    tierBasic?: BoolWithAggregatesFilter<"Discount"> | boolean
    tierNormal?: BoolWithAggregatesFilter<"Discount"> | boolean
    tierPremium?: BoolWithAggregatesFilter<"Discount"> | boolean
    startAt?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    limitPerUser?: IntNullableWithAggregatesFilter<"Discount"> | number | null
    limitTotal?: IntNullableWithAggregatesFilter<"Discount"> | number | null
    usedTotal?: IntWithAggregatesFilter<"Discount"> | number
    terms?: StringNullableWithAggregatesFilter<"Discount"> | string | null
    status?: StringWithAggregatesFilter<"Discount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    businessId?: StringNullableWithAggregatesFilter<"Discount"> | string | null
  }

  export type RedemptionWhereInput = {
    AND?: RedemptionWhereInput | RedemptionWhereInput[]
    OR?: RedemptionWhereInput[]
    NOT?: RedemptionWhereInput | RedemptionWhereInput[]
    id?: StringFilter<"Redemption"> | string
    userId?: StringFilter<"Redemption"> | string
    discountId?: StringFilter<"Redemption"> | string
    businessId?: StringFilter<"Redemption"> | string
    redeemedAt?: DateTimeFilter<"Redemption"> | Date | string
    channel?: StringFilter<"Redemption"> | string
    meta?: StringNullableFilter<"Redemption"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    discount?: XOR<DiscountRelationFilter, DiscountWhereInput>
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
  }

  export type RedemptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    discountId?: SortOrder
    businessId?: SortOrder
    redeemedAt?: SortOrder
    channel?: SortOrder
    meta?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    discount?: DiscountOrderByWithRelationInput
    business?: BusinessOrderByWithRelationInput
  }

  export type RedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RedemptionWhereInput | RedemptionWhereInput[]
    OR?: RedemptionWhereInput[]
    NOT?: RedemptionWhereInput | RedemptionWhereInput[]
    userId?: StringFilter<"Redemption"> | string
    discountId?: StringFilter<"Redemption"> | string
    businessId?: StringFilter<"Redemption"> | string
    redeemedAt?: DateTimeFilter<"Redemption"> | Date | string
    channel?: StringFilter<"Redemption"> | string
    meta?: StringNullableFilter<"Redemption"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    discount?: XOR<DiscountRelationFilter, DiscountWhereInput>
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
  }, "id">

  export type RedemptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    discountId?: SortOrder
    businessId?: SortOrder
    redeemedAt?: SortOrder
    channel?: SortOrder
    meta?: SortOrderInput | SortOrder
    _count?: RedemptionCountOrderByAggregateInput
    _max?: RedemptionMaxOrderByAggregateInput
    _min?: RedemptionMinOrderByAggregateInput
  }

  export type RedemptionScalarWhereWithAggregatesInput = {
    AND?: RedemptionScalarWhereWithAggregatesInput | RedemptionScalarWhereWithAggregatesInput[]
    OR?: RedemptionScalarWhereWithAggregatesInput[]
    NOT?: RedemptionScalarWhereWithAggregatesInput | RedemptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Redemption"> | string
    userId?: StringWithAggregatesFilter<"Redemption"> | string
    discountId?: StringWithAggregatesFilter<"Redemption"> | string
    businessId?: StringWithAggregatesFilter<"Redemption"> | string
    redeemedAt?: DateTimeWithAggregatesFilter<"Redemption"> | Date | string
    channel?: StringWithAggregatesFilter<"Redemption"> | string
    meta?: StringNullableWithAggregatesFilter<"Redemption"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    icon?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    discounts?: DiscountCategoryListRelationFilter
    businesses?: BusinessCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discounts?: DiscountCategoryOrderByRelationAggregateInput
    businesses?: BusinessCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    icon?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    discounts?: DiscountCategoryListRelationFilter
    businesses?: BusinessCategoryListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type DiscountCategoryWhereInput = {
    AND?: DiscountCategoryWhereInput | DiscountCategoryWhereInput[]
    OR?: DiscountCategoryWhereInput[]
    NOT?: DiscountCategoryWhereInput | DiscountCategoryWhereInput[]
    discountId?: StringFilter<"DiscountCategory"> | string
    categoryId?: StringFilter<"DiscountCategory"> | string
    discount?: XOR<DiscountRelationFilter, DiscountWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type DiscountCategoryOrderByWithRelationInput = {
    discountId?: SortOrder
    categoryId?: SortOrder
    discount?: DiscountOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type DiscountCategoryWhereUniqueInput = Prisma.AtLeast<{
    discountId_categoryId?: DiscountCategoryDiscountIdCategoryIdCompoundUniqueInput
    AND?: DiscountCategoryWhereInput | DiscountCategoryWhereInput[]
    OR?: DiscountCategoryWhereInput[]
    NOT?: DiscountCategoryWhereInput | DiscountCategoryWhereInput[]
    discountId?: StringFilter<"DiscountCategory"> | string
    categoryId?: StringFilter<"DiscountCategory"> | string
    discount?: XOR<DiscountRelationFilter, DiscountWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "discountId_categoryId">

  export type DiscountCategoryOrderByWithAggregationInput = {
    discountId?: SortOrder
    categoryId?: SortOrder
    _count?: DiscountCategoryCountOrderByAggregateInput
    _max?: DiscountCategoryMaxOrderByAggregateInput
    _min?: DiscountCategoryMinOrderByAggregateInput
  }

  export type DiscountCategoryScalarWhereWithAggregatesInput = {
    AND?: DiscountCategoryScalarWhereWithAggregatesInput | DiscountCategoryScalarWhereWithAggregatesInput[]
    OR?: DiscountCategoryScalarWhereWithAggregatesInput[]
    NOT?: DiscountCategoryScalarWhereWithAggregatesInput | DiscountCategoryScalarWhereWithAggregatesInput[]
    discountId?: StringWithAggregatesFilter<"DiscountCategory"> | string
    categoryId?: StringWithAggregatesFilter<"DiscountCategory"> | string
  }

  export type BusinessCategoryWhereInput = {
    AND?: BusinessCategoryWhereInput | BusinessCategoryWhereInput[]
    OR?: BusinessCategoryWhereInput[]
    NOT?: BusinessCategoryWhereInput | BusinessCategoryWhereInput[]
    businessId?: StringFilter<"BusinessCategory"> | string
    categoryId?: StringFilter<"BusinessCategory"> | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type BusinessCategoryOrderByWithRelationInput = {
    businessId?: SortOrder
    categoryId?: SortOrder
    business?: BusinessOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type BusinessCategoryWhereUniqueInput = Prisma.AtLeast<{
    businessId_categoryId?: BusinessCategoryBusinessIdCategoryIdCompoundUniqueInput
    AND?: BusinessCategoryWhereInput | BusinessCategoryWhereInput[]
    OR?: BusinessCategoryWhereInput[]
    NOT?: BusinessCategoryWhereInput | BusinessCategoryWhereInput[]
    businessId?: StringFilter<"BusinessCategory"> | string
    categoryId?: StringFilter<"BusinessCategory"> | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "businessId_categoryId">

  export type BusinessCategoryOrderByWithAggregationInput = {
    businessId?: SortOrder
    categoryId?: SortOrder
    _count?: BusinessCategoryCountOrderByAggregateInput
    _max?: BusinessCategoryMaxOrderByAggregateInput
    _min?: BusinessCategoryMinOrderByAggregateInput
  }

  export type BusinessCategoryScalarWhereWithAggregatesInput = {
    AND?: BusinessCategoryScalarWhereWithAggregatesInput | BusinessCategoryScalarWhereWithAggregatesInput[]
    OR?: BusinessCategoryScalarWhereWithAggregatesInput[]
    NOT?: BusinessCategoryScalarWhereWithAggregatesInput | BusinessCategoryScalarWhereWithAggregatesInput[]
    businessId?: StringWithAggregatesFilter<"BusinessCategory"> | string
    categoryId?: StringWithAggregatesFilter<"BusinessCategory"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    tier: string
    status?: string
    role?: string
    tokenVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    redemptions?: RedemptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    tier: string
    status?: string
    role?: string
    tokenVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redemptions?: RedemptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redemptions?: RedemptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    tier: string
    status?: string
    role?: string
    tokenVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCreateInput = {
    id?: string
    code: string
    name: string
    ruc?: string | null
    address?: string | null
    contact?: string | null
    status?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountCreateNestedManyWithoutBusinessInput
    categories?: BusinessCategoryCreateNestedManyWithoutBusinessInput
    redemptions?: RedemptionCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    ruc?: string | null
    address?: string | null
    contact?: string | null
    status?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountUncheckedCreateNestedManyWithoutBusinessInput
    categories?: BusinessCategoryUncheckedCreateNestedManyWithoutBusinessInput
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountUpdateManyWithoutBusinessNestedInput
    categories?: BusinessCategoryUpdateManyWithoutBusinessNestedInput
    redemptions?: RedemptionUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountUncheckedUpdateManyWithoutBusinessNestedInput
    categories?: BusinessCategoryUncheckedUpdateManyWithoutBusinessNestedInput
    redemptions?: RedemptionUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: string
    code: string
    name: string
    ruc?: string | null
    address?: string | null
    contact?: string | null
    status?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCreateInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    business?: BusinessCreateNestedOneWithoutDiscountsInput
    categories?: DiscountCategoryCreateNestedManyWithoutDiscountInput
    redemptions?: RedemptionCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUncheckedCreateInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessId?: string | null
    categories?: DiscountCategoryUncheckedCreateNestedManyWithoutDiscountInput
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneWithoutDiscountsNestedInput
    categories?: DiscountCategoryUpdateManyWithoutDiscountNestedInput
    redemptions?: RedemptionUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: DiscountCategoryUncheckedUpdateManyWithoutDiscountNestedInput
    redemptions?: RedemptionUncheckedUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountCreateManyInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessId?: string | null
  }

  export type DiscountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RedemptionCreateInput = {
    id?: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
    user: UserCreateNestedOneWithoutRedemptionsInput
    discount: DiscountCreateNestedOneWithoutRedemptionsInput
    business: BusinessCreateNestedOneWithoutRedemptionsInput
  }

  export type RedemptionUncheckedCreateInput = {
    id?: string
    userId: string
    discountId: string
    businessId: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
  }

  export type RedemptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRedemptionsNestedInput
    discount?: DiscountUpdateOneRequiredWithoutRedemptionsNestedInput
    business?: BusinessUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type RedemptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    discountId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RedemptionCreateManyInput = {
    id?: string
    userId: string
    discountId: string
    businessId: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
  }

  export type RedemptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RedemptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    discountId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    slug: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountCategoryCreateNestedManyWithoutCategoryInput
    businesses?: BusinessCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountCategoryUncheckedCreateNestedManyWithoutCategoryInput
    businesses?: BusinessCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountCategoryUpdateManyWithoutCategoryNestedInput
    businesses?: BusinessCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    businesses?: BusinessCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    slug: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCategoryCreateInput = {
    discount: DiscountCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutDiscountsInput
  }

  export type DiscountCategoryUncheckedCreateInput = {
    discountId: string
    categoryId: string
  }

  export type DiscountCategoryUpdateInput = {
    discount?: DiscountUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutDiscountsNestedInput
  }

  export type DiscountCategoryUncheckedUpdateInput = {
    discountId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscountCategoryCreateManyInput = {
    discountId: string
    categoryId: string
  }

  export type DiscountCategoryUpdateManyMutationInput = {

  }

  export type DiscountCategoryUncheckedUpdateManyInput = {
    discountId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCategoryCreateInput = {
    business: BusinessCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutBusinessesInput
  }

  export type BusinessCategoryUncheckedCreateInput = {
    businessId: string
    categoryId: string
  }

  export type BusinessCategoryUpdateInput = {
    business?: BusinessUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutBusinessesNestedInput
  }

  export type BusinessCategoryUncheckedUpdateInput = {
    businessId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCategoryCreateManyInput = {
    businessId: string
    categoryId: string
  }

  export type BusinessCategoryUpdateManyMutationInput = {

  }

  export type BusinessCategoryUncheckedUpdateManyInput = {
    businessId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RedemptionListRelationFilter = {
    every?: RedemptionWhereInput
    some?: RedemptionWhereInput
    none?: RedemptionWhereInput
  }

  export type RedemptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    role?: SortOrder
    tokenVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    tokenVersion?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    role?: SortOrder
    tokenVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    role?: SortOrder
    tokenVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    tokenVersion?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DiscountListRelationFilter = {
    every?: DiscountWhereInput
    some?: DiscountWhereInput
    none?: DiscountWhereInput
  }

  export type BusinessCategoryListRelationFilter = {
    every?: BusinessCategoryWhereInput
    some?: BusinessCategoryWhereInput
    none?: BusinessCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiscountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    ruc?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    ruc?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    ruc?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BusinessNullableRelationFilter = {
    is?: BusinessWhereInput | null
    isNot?: BusinessWhereInput | null
  }

  export type DiscountCategoryListRelationFilter = {
    every?: DiscountCategoryWhereInput
    some?: DiscountCategoryWhereInput
    none?: DiscountCategoryWhereInput
  }

  export type DiscountCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscountCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    imageUrl?: SortOrder
    tierBasic?: SortOrder
    tierNormal?: SortOrder
    tierPremium?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    limitPerUser?: SortOrder
    limitTotal?: SortOrder
    usedTotal?: SortOrder
    terms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrder
  }

  export type DiscountAvgOrderByAggregateInput = {
    limitPerUser?: SortOrder
    limitTotal?: SortOrder
    usedTotal?: SortOrder
  }

  export type DiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    imageUrl?: SortOrder
    tierBasic?: SortOrder
    tierNormal?: SortOrder
    tierPremium?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    limitPerUser?: SortOrder
    limitTotal?: SortOrder
    usedTotal?: SortOrder
    terms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrder
  }

  export type DiscountMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    imageUrl?: SortOrder
    tierBasic?: SortOrder
    tierNormal?: SortOrder
    tierPremium?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    limitPerUser?: SortOrder
    limitTotal?: SortOrder
    usedTotal?: SortOrder
    terms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessId?: SortOrder
  }

  export type DiscountSumOrderByAggregateInput = {
    limitPerUser?: SortOrder
    limitTotal?: SortOrder
    usedTotal?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DiscountRelationFilter = {
    is?: DiscountWhereInput
    isNot?: DiscountWhereInput
  }

  export type BusinessRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type RedemptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discountId?: SortOrder
    businessId?: SortOrder
    redeemedAt?: SortOrder
    channel?: SortOrder
    meta?: SortOrder
  }

  export type RedemptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discountId?: SortOrder
    businessId?: SortOrder
    redeemedAt?: SortOrder
    channel?: SortOrder
    meta?: SortOrder
  }

  export type RedemptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discountId?: SortOrder
    businessId?: SortOrder
    redeemedAt?: SortOrder
    channel?: SortOrder
    meta?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type DiscountCategoryDiscountIdCategoryIdCompoundUniqueInput = {
    discountId: string
    categoryId: string
  }

  export type DiscountCategoryCountOrderByAggregateInput = {
    discountId?: SortOrder
    categoryId?: SortOrder
  }

  export type DiscountCategoryMaxOrderByAggregateInput = {
    discountId?: SortOrder
    categoryId?: SortOrder
  }

  export type DiscountCategoryMinOrderByAggregateInput = {
    discountId?: SortOrder
    categoryId?: SortOrder
  }

  export type BusinessCategoryBusinessIdCategoryIdCompoundUniqueInput = {
    businessId: string
    categoryId: string
  }

  export type BusinessCategoryCountOrderByAggregateInput = {
    businessId?: SortOrder
    categoryId?: SortOrder
  }

  export type BusinessCategoryMaxOrderByAggregateInput = {
    businessId?: SortOrder
    categoryId?: SortOrder
  }

  export type BusinessCategoryMinOrderByAggregateInput = {
    businessId?: SortOrder
    categoryId?: SortOrder
  }

  export type RedemptionCreateNestedManyWithoutUserInput = {
    create?: XOR<RedemptionCreateWithoutUserInput, RedemptionUncheckedCreateWithoutUserInput> | RedemptionCreateWithoutUserInput[] | RedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutUserInput | RedemptionCreateOrConnectWithoutUserInput[]
    createMany?: RedemptionCreateManyUserInputEnvelope
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
  }

  export type RedemptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RedemptionCreateWithoutUserInput, RedemptionUncheckedCreateWithoutUserInput> | RedemptionCreateWithoutUserInput[] | RedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutUserInput | RedemptionCreateOrConnectWithoutUserInput[]
    createMany?: RedemptionCreateManyUserInputEnvelope
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RedemptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RedemptionCreateWithoutUserInput, RedemptionUncheckedCreateWithoutUserInput> | RedemptionCreateWithoutUserInput[] | RedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutUserInput | RedemptionCreateOrConnectWithoutUserInput[]
    upsert?: RedemptionUpsertWithWhereUniqueWithoutUserInput | RedemptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RedemptionCreateManyUserInputEnvelope
    set?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    disconnect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    delete?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    update?: RedemptionUpdateWithWhereUniqueWithoutUserInput | RedemptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RedemptionUpdateManyWithWhereWithoutUserInput | RedemptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
  }

  export type RedemptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RedemptionCreateWithoutUserInput, RedemptionUncheckedCreateWithoutUserInput> | RedemptionCreateWithoutUserInput[] | RedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutUserInput | RedemptionCreateOrConnectWithoutUserInput[]
    upsert?: RedemptionUpsertWithWhereUniqueWithoutUserInput | RedemptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RedemptionCreateManyUserInputEnvelope
    set?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    disconnect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    delete?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    update?: RedemptionUpdateWithWhereUniqueWithoutUserInput | RedemptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RedemptionUpdateManyWithWhereWithoutUserInput | RedemptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
  }

  export type DiscountCreateNestedManyWithoutBusinessInput = {
    create?: XOR<DiscountCreateWithoutBusinessInput, DiscountUncheckedCreateWithoutBusinessInput> | DiscountCreateWithoutBusinessInput[] | DiscountUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutBusinessInput | DiscountCreateOrConnectWithoutBusinessInput[]
    createMany?: DiscountCreateManyBusinessInputEnvelope
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
  }

  export type BusinessCategoryCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessCategoryCreateWithoutBusinessInput, BusinessCategoryUncheckedCreateWithoutBusinessInput> | BusinessCategoryCreateWithoutBusinessInput[] | BusinessCategoryUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutBusinessInput | BusinessCategoryCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessCategoryCreateManyBusinessInputEnvelope
    connect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
  }

  export type RedemptionCreateNestedManyWithoutBusinessInput = {
    create?: XOR<RedemptionCreateWithoutBusinessInput, RedemptionUncheckedCreateWithoutBusinessInput> | RedemptionCreateWithoutBusinessInput[] | RedemptionUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutBusinessInput | RedemptionCreateOrConnectWithoutBusinessInput[]
    createMany?: RedemptionCreateManyBusinessInputEnvelope
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
  }

  export type DiscountUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<DiscountCreateWithoutBusinessInput, DiscountUncheckedCreateWithoutBusinessInput> | DiscountCreateWithoutBusinessInput[] | DiscountUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutBusinessInput | DiscountCreateOrConnectWithoutBusinessInput[]
    createMany?: DiscountCreateManyBusinessInputEnvelope
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
  }

  export type BusinessCategoryUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessCategoryCreateWithoutBusinessInput, BusinessCategoryUncheckedCreateWithoutBusinessInput> | BusinessCategoryCreateWithoutBusinessInput[] | BusinessCategoryUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutBusinessInput | BusinessCategoryCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessCategoryCreateManyBusinessInputEnvelope
    connect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
  }

  export type RedemptionUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<RedemptionCreateWithoutBusinessInput, RedemptionUncheckedCreateWithoutBusinessInput> | RedemptionCreateWithoutBusinessInput[] | RedemptionUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutBusinessInput | RedemptionCreateOrConnectWithoutBusinessInput[]
    createMany?: RedemptionCreateManyBusinessInputEnvelope
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DiscountUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<DiscountCreateWithoutBusinessInput, DiscountUncheckedCreateWithoutBusinessInput> | DiscountCreateWithoutBusinessInput[] | DiscountUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutBusinessInput | DiscountCreateOrConnectWithoutBusinessInput[]
    upsert?: DiscountUpsertWithWhereUniqueWithoutBusinessInput | DiscountUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: DiscountCreateManyBusinessInputEnvelope
    set?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    disconnect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    delete?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    update?: DiscountUpdateWithWhereUniqueWithoutBusinessInput | DiscountUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: DiscountUpdateManyWithWhereWithoutBusinessInput | DiscountUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
  }

  export type BusinessCategoryUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessCategoryCreateWithoutBusinessInput, BusinessCategoryUncheckedCreateWithoutBusinessInput> | BusinessCategoryCreateWithoutBusinessInput[] | BusinessCategoryUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutBusinessInput | BusinessCategoryCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessCategoryUpsertWithWhereUniqueWithoutBusinessInput | BusinessCategoryUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessCategoryCreateManyBusinessInputEnvelope
    set?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    disconnect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    delete?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    connect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    update?: BusinessCategoryUpdateWithWhereUniqueWithoutBusinessInput | BusinessCategoryUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessCategoryUpdateManyWithWhereWithoutBusinessInput | BusinessCategoryUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessCategoryScalarWhereInput | BusinessCategoryScalarWhereInput[]
  }

  export type RedemptionUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<RedemptionCreateWithoutBusinessInput, RedemptionUncheckedCreateWithoutBusinessInput> | RedemptionCreateWithoutBusinessInput[] | RedemptionUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutBusinessInput | RedemptionCreateOrConnectWithoutBusinessInput[]
    upsert?: RedemptionUpsertWithWhereUniqueWithoutBusinessInput | RedemptionUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: RedemptionCreateManyBusinessInputEnvelope
    set?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    disconnect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    delete?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    update?: RedemptionUpdateWithWhereUniqueWithoutBusinessInput | RedemptionUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: RedemptionUpdateManyWithWhereWithoutBusinessInput | RedemptionUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
  }

  export type DiscountUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<DiscountCreateWithoutBusinessInput, DiscountUncheckedCreateWithoutBusinessInput> | DiscountCreateWithoutBusinessInput[] | DiscountUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutBusinessInput | DiscountCreateOrConnectWithoutBusinessInput[]
    upsert?: DiscountUpsertWithWhereUniqueWithoutBusinessInput | DiscountUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: DiscountCreateManyBusinessInputEnvelope
    set?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    disconnect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    delete?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    update?: DiscountUpdateWithWhereUniqueWithoutBusinessInput | DiscountUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: DiscountUpdateManyWithWhereWithoutBusinessInput | DiscountUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
  }

  export type BusinessCategoryUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessCategoryCreateWithoutBusinessInput, BusinessCategoryUncheckedCreateWithoutBusinessInput> | BusinessCategoryCreateWithoutBusinessInput[] | BusinessCategoryUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutBusinessInput | BusinessCategoryCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessCategoryUpsertWithWhereUniqueWithoutBusinessInput | BusinessCategoryUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessCategoryCreateManyBusinessInputEnvelope
    set?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    disconnect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    delete?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    connect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    update?: BusinessCategoryUpdateWithWhereUniqueWithoutBusinessInput | BusinessCategoryUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessCategoryUpdateManyWithWhereWithoutBusinessInput | BusinessCategoryUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessCategoryScalarWhereInput | BusinessCategoryScalarWhereInput[]
  }

  export type RedemptionUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<RedemptionCreateWithoutBusinessInput, RedemptionUncheckedCreateWithoutBusinessInput> | RedemptionCreateWithoutBusinessInput[] | RedemptionUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutBusinessInput | RedemptionCreateOrConnectWithoutBusinessInput[]
    upsert?: RedemptionUpsertWithWhereUniqueWithoutBusinessInput | RedemptionUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: RedemptionCreateManyBusinessInputEnvelope
    set?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    disconnect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    delete?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    update?: RedemptionUpdateWithWhereUniqueWithoutBusinessInput | RedemptionUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: RedemptionUpdateManyWithWhereWithoutBusinessInput | RedemptionUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutDiscountsInput = {
    create?: XOR<BusinessCreateWithoutDiscountsInput, BusinessUncheckedCreateWithoutDiscountsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutDiscountsInput
    connect?: BusinessWhereUniqueInput
  }

  export type DiscountCategoryCreateNestedManyWithoutDiscountInput = {
    create?: XOR<DiscountCategoryCreateWithoutDiscountInput, DiscountCategoryUncheckedCreateWithoutDiscountInput> | DiscountCategoryCreateWithoutDiscountInput[] | DiscountCategoryUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: DiscountCategoryCreateOrConnectWithoutDiscountInput | DiscountCategoryCreateOrConnectWithoutDiscountInput[]
    createMany?: DiscountCategoryCreateManyDiscountInputEnvelope
    connect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
  }

  export type RedemptionCreateNestedManyWithoutDiscountInput = {
    create?: XOR<RedemptionCreateWithoutDiscountInput, RedemptionUncheckedCreateWithoutDiscountInput> | RedemptionCreateWithoutDiscountInput[] | RedemptionUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutDiscountInput | RedemptionCreateOrConnectWithoutDiscountInput[]
    createMany?: RedemptionCreateManyDiscountInputEnvelope
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
  }

  export type DiscountCategoryUncheckedCreateNestedManyWithoutDiscountInput = {
    create?: XOR<DiscountCategoryCreateWithoutDiscountInput, DiscountCategoryUncheckedCreateWithoutDiscountInput> | DiscountCategoryCreateWithoutDiscountInput[] | DiscountCategoryUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: DiscountCategoryCreateOrConnectWithoutDiscountInput | DiscountCategoryCreateOrConnectWithoutDiscountInput[]
    createMany?: DiscountCategoryCreateManyDiscountInputEnvelope
    connect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
  }

  export type RedemptionUncheckedCreateNestedManyWithoutDiscountInput = {
    create?: XOR<RedemptionCreateWithoutDiscountInput, RedemptionUncheckedCreateWithoutDiscountInput> | RedemptionCreateWithoutDiscountInput[] | RedemptionUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutDiscountInput | RedemptionCreateOrConnectWithoutDiscountInput[]
    createMany?: RedemptionCreateManyDiscountInputEnvelope
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessUpdateOneWithoutDiscountsNestedInput = {
    create?: XOR<BusinessCreateWithoutDiscountsInput, BusinessUncheckedCreateWithoutDiscountsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutDiscountsInput
    upsert?: BusinessUpsertWithoutDiscountsInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutDiscountsInput, BusinessUpdateWithoutDiscountsInput>, BusinessUncheckedUpdateWithoutDiscountsInput>
  }

  export type DiscountCategoryUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<DiscountCategoryCreateWithoutDiscountInput, DiscountCategoryUncheckedCreateWithoutDiscountInput> | DiscountCategoryCreateWithoutDiscountInput[] | DiscountCategoryUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: DiscountCategoryCreateOrConnectWithoutDiscountInput | DiscountCategoryCreateOrConnectWithoutDiscountInput[]
    upsert?: DiscountCategoryUpsertWithWhereUniqueWithoutDiscountInput | DiscountCategoryUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: DiscountCategoryCreateManyDiscountInputEnvelope
    set?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    disconnect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    delete?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    connect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    update?: DiscountCategoryUpdateWithWhereUniqueWithoutDiscountInput | DiscountCategoryUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: DiscountCategoryUpdateManyWithWhereWithoutDiscountInput | DiscountCategoryUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: DiscountCategoryScalarWhereInput | DiscountCategoryScalarWhereInput[]
  }

  export type RedemptionUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<RedemptionCreateWithoutDiscountInput, RedemptionUncheckedCreateWithoutDiscountInput> | RedemptionCreateWithoutDiscountInput[] | RedemptionUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutDiscountInput | RedemptionCreateOrConnectWithoutDiscountInput[]
    upsert?: RedemptionUpsertWithWhereUniqueWithoutDiscountInput | RedemptionUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: RedemptionCreateManyDiscountInputEnvelope
    set?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    disconnect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    delete?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    update?: RedemptionUpdateWithWhereUniqueWithoutDiscountInput | RedemptionUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: RedemptionUpdateManyWithWhereWithoutDiscountInput | RedemptionUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
  }

  export type DiscountCategoryUncheckedUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<DiscountCategoryCreateWithoutDiscountInput, DiscountCategoryUncheckedCreateWithoutDiscountInput> | DiscountCategoryCreateWithoutDiscountInput[] | DiscountCategoryUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: DiscountCategoryCreateOrConnectWithoutDiscountInput | DiscountCategoryCreateOrConnectWithoutDiscountInput[]
    upsert?: DiscountCategoryUpsertWithWhereUniqueWithoutDiscountInput | DiscountCategoryUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: DiscountCategoryCreateManyDiscountInputEnvelope
    set?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    disconnect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    delete?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    connect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    update?: DiscountCategoryUpdateWithWhereUniqueWithoutDiscountInput | DiscountCategoryUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: DiscountCategoryUpdateManyWithWhereWithoutDiscountInput | DiscountCategoryUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: DiscountCategoryScalarWhereInput | DiscountCategoryScalarWhereInput[]
  }

  export type RedemptionUncheckedUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<RedemptionCreateWithoutDiscountInput, RedemptionUncheckedCreateWithoutDiscountInput> | RedemptionCreateWithoutDiscountInput[] | RedemptionUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutDiscountInput | RedemptionCreateOrConnectWithoutDiscountInput[]
    upsert?: RedemptionUpsertWithWhereUniqueWithoutDiscountInput | RedemptionUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: RedemptionCreateManyDiscountInputEnvelope
    set?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    disconnect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    delete?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    update?: RedemptionUpdateWithWhereUniqueWithoutDiscountInput | RedemptionUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: RedemptionUpdateManyWithWhereWithoutDiscountInput | RedemptionUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRedemptionsInput = {
    create?: XOR<UserCreateWithoutRedemptionsInput, UserUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRedemptionsInput
    connect?: UserWhereUniqueInput
  }

  export type DiscountCreateNestedOneWithoutRedemptionsInput = {
    create?: XOR<DiscountCreateWithoutRedemptionsInput, DiscountUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutRedemptionsInput
    connect?: DiscountWhereUniqueInput
  }

  export type BusinessCreateNestedOneWithoutRedemptionsInput = {
    create?: XOR<BusinessCreateWithoutRedemptionsInput, BusinessUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutRedemptionsInput
    connect?: BusinessWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: XOR<UserCreateWithoutRedemptionsInput, UserUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRedemptionsInput
    upsert?: UserUpsertWithoutRedemptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRedemptionsInput, UserUpdateWithoutRedemptionsInput>, UserUncheckedUpdateWithoutRedemptionsInput>
  }

  export type DiscountUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: XOR<DiscountCreateWithoutRedemptionsInput, DiscountUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutRedemptionsInput
    upsert?: DiscountUpsertWithoutRedemptionsInput
    connect?: DiscountWhereUniqueInput
    update?: XOR<XOR<DiscountUpdateToOneWithWhereWithoutRedemptionsInput, DiscountUpdateWithoutRedemptionsInput>, DiscountUncheckedUpdateWithoutRedemptionsInput>
  }

  export type BusinessUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: XOR<BusinessCreateWithoutRedemptionsInput, BusinessUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutRedemptionsInput
    upsert?: BusinessUpsertWithoutRedemptionsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutRedemptionsInput, BusinessUpdateWithoutRedemptionsInput>, BusinessUncheckedUpdateWithoutRedemptionsInput>
  }

  export type DiscountCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DiscountCategoryCreateWithoutCategoryInput, DiscountCategoryUncheckedCreateWithoutCategoryInput> | DiscountCategoryCreateWithoutCategoryInput[] | DiscountCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DiscountCategoryCreateOrConnectWithoutCategoryInput | DiscountCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: DiscountCategoryCreateManyCategoryInputEnvelope
    connect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
  }

  export type BusinessCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BusinessCategoryCreateWithoutCategoryInput, BusinessCategoryUncheckedCreateWithoutCategoryInput> | BusinessCategoryCreateWithoutCategoryInput[] | BusinessCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutCategoryInput | BusinessCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BusinessCategoryCreateManyCategoryInputEnvelope
    connect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
  }

  export type DiscountCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DiscountCategoryCreateWithoutCategoryInput, DiscountCategoryUncheckedCreateWithoutCategoryInput> | DiscountCategoryCreateWithoutCategoryInput[] | DiscountCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DiscountCategoryCreateOrConnectWithoutCategoryInput | DiscountCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: DiscountCategoryCreateManyCategoryInputEnvelope
    connect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
  }

  export type BusinessCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BusinessCategoryCreateWithoutCategoryInput, BusinessCategoryUncheckedCreateWithoutCategoryInput> | BusinessCategoryCreateWithoutCategoryInput[] | BusinessCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutCategoryInput | BusinessCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BusinessCategoryCreateManyCategoryInputEnvelope
    connect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
  }

  export type DiscountCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DiscountCategoryCreateWithoutCategoryInput, DiscountCategoryUncheckedCreateWithoutCategoryInput> | DiscountCategoryCreateWithoutCategoryInput[] | DiscountCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DiscountCategoryCreateOrConnectWithoutCategoryInput | DiscountCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: DiscountCategoryUpsertWithWhereUniqueWithoutCategoryInput | DiscountCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DiscountCategoryCreateManyCategoryInputEnvelope
    set?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    disconnect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    delete?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    connect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    update?: DiscountCategoryUpdateWithWhereUniqueWithoutCategoryInput | DiscountCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DiscountCategoryUpdateManyWithWhereWithoutCategoryInput | DiscountCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DiscountCategoryScalarWhereInput | DiscountCategoryScalarWhereInput[]
  }

  export type BusinessCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BusinessCategoryCreateWithoutCategoryInput, BusinessCategoryUncheckedCreateWithoutCategoryInput> | BusinessCategoryCreateWithoutCategoryInput[] | BusinessCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutCategoryInput | BusinessCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BusinessCategoryUpsertWithWhereUniqueWithoutCategoryInput | BusinessCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BusinessCategoryCreateManyCategoryInputEnvelope
    set?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    disconnect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    delete?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    connect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    update?: BusinessCategoryUpdateWithWhereUniqueWithoutCategoryInput | BusinessCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BusinessCategoryUpdateManyWithWhereWithoutCategoryInput | BusinessCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BusinessCategoryScalarWhereInput | BusinessCategoryScalarWhereInput[]
  }

  export type DiscountCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DiscountCategoryCreateWithoutCategoryInput, DiscountCategoryUncheckedCreateWithoutCategoryInput> | DiscountCategoryCreateWithoutCategoryInput[] | DiscountCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DiscountCategoryCreateOrConnectWithoutCategoryInput | DiscountCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: DiscountCategoryUpsertWithWhereUniqueWithoutCategoryInput | DiscountCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DiscountCategoryCreateManyCategoryInputEnvelope
    set?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    disconnect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    delete?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    connect?: DiscountCategoryWhereUniqueInput | DiscountCategoryWhereUniqueInput[]
    update?: DiscountCategoryUpdateWithWhereUniqueWithoutCategoryInput | DiscountCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DiscountCategoryUpdateManyWithWhereWithoutCategoryInput | DiscountCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DiscountCategoryScalarWhereInput | DiscountCategoryScalarWhereInput[]
  }

  export type BusinessCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BusinessCategoryCreateWithoutCategoryInput, BusinessCategoryUncheckedCreateWithoutCategoryInput> | BusinessCategoryCreateWithoutCategoryInput[] | BusinessCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutCategoryInput | BusinessCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BusinessCategoryUpsertWithWhereUniqueWithoutCategoryInput | BusinessCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BusinessCategoryCreateManyCategoryInputEnvelope
    set?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    disconnect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    delete?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    connect?: BusinessCategoryWhereUniqueInput | BusinessCategoryWhereUniqueInput[]
    update?: BusinessCategoryUpdateWithWhereUniqueWithoutCategoryInput | BusinessCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BusinessCategoryUpdateManyWithWhereWithoutCategoryInput | BusinessCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BusinessCategoryScalarWhereInput | BusinessCategoryScalarWhereInput[]
  }

  export type DiscountCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<DiscountCreateWithoutCategoriesInput, DiscountUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutCategoriesInput
    connect?: DiscountWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutDiscountsInput = {
    create?: XOR<CategoryCreateWithoutDiscountsInput, CategoryUncheckedCreateWithoutDiscountsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDiscountsInput
    connect?: CategoryWhereUniqueInput
  }

  export type DiscountUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<DiscountCreateWithoutCategoriesInput, DiscountUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutCategoriesInput
    upsert?: DiscountUpsertWithoutCategoriesInput
    connect?: DiscountWhereUniqueInput
    update?: XOR<XOR<DiscountUpdateToOneWithWhereWithoutCategoriesInput, DiscountUpdateWithoutCategoriesInput>, DiscountUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutDiscountsNestedInput = {
    create?: XOR<CategoryCreateWithoutDiscountsInput, CategoryUncheckedCreateWithoutDiscountsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDiscountsInput
    upsert?: CategoryUpsertWithoutDiscountsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutDiscountsInput, CategoryUpdateWithoutDiscountsInput>, CategoryUncheckedUpdateWithoutDiscountsInput>
  }

  export type BusinessCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<BusinessCreateWithoutCategoriesInput, BusinessUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoriesInput
    connect?: BusinessWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBusinessesInput = {
    create?: XOR<CategoryCreateWithoutBusinessesInput, CategoryUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBusinessesInput
    connect?: CategoryWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<BusinessCreateWithoutCategoriesInput, BusinessUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoriesInput
    upsert?: BusinessUpsertWithoutCategoriesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutCategoriesInput, BusinessUpdateWithoutCategoriesInput>, BusinessUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutBusinessesNestedInput = {
    create?: XOR<CategoryCreateWithoutBusinessesInput, CategoryUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBusinessesInput
    upsert?: CategoryUpsertWithoutBusinessesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBusinessesInput, CategoryUpdateWithoutBusinessesInput>, CategoryUncheckedUpdateWithoutBusinessesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RedemptionCreateWithoutUserInput = {
    id?: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
    discount: DiscountCreateNestedOneWithoutRedemptionsInput
    business: BusinessCreateNestedOneWithoutRedemptionsInput
  }

  export type RedemptionUncheckedCreateWithoutUserInput = {
    id?: string
    discountId: string
    businessId: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
  }

  export type RedemptionCreateOrConnectWithoutUserInput = {
    where: RedemptionWhereUniqueInput
    create: XOR<RedemptionCreateWithoutUserInput, RedemptionUncheckedCreateWithoutUserInput>
  }

  export type RedemptionCreateManyUserInputEnvelope = {
    data: RedemptionCreateManyUserInput | RedemptionCreateManyUserInput[]
  }

  export type RedemptionUpsertWithWhereUniqueWithoutUserInput = {
    where: RedemptionWhereUniqueInput
    update: XOR<RedemptionUpdateWithoutUserInput, RedemptionUncheckedUpdateWithoutUserInput>
    create: XOR<RedemptionCreateWithoutUserInput, RedemptionUncheckedCreateWithoutUserInput>
  }

  export type RedemptionUpdateWithWhereUniqueWithoutUserInput = {
    where: RedemptionWhereUniqueInput
    data: XOR<RedemptionUpdateWithoutUserInput, RedemptionUncheckedUpdateWithoutUserInput>
  }

  export type RedemptionUpdateManyWithWhereWithoutUserInput = {
    where: RedemptionScalarWhereInput
    data: XOR<RedemptionUpdateManyMutationInput, RedemptionUncheckedUpdateManyWithoutUserInput>
  }

  export type RedemptionScalarWhereInput = {
    AND?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
    OR?: RedemptionScalarWhereInput[]
    NOT?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
    id?: StringFilter<"Redemption"> | string
    userId?: StringFilter<"Redemption"> | string
    discountId?: StringFilter<"Redemption"> | string
    businessId?: StringFilter<"Redemption"> | string
    redeemedAt?: DateTimeFilter<"Redemption"> | Date | string
    channel?: StringFilter<"Redemption"> | string
    meta?: StringNullableFilter<"Redemption"> | string | null
  }

  export type DiscountCreateWithoutBusinessInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DiscountCategoryCreateNestedManyWithoutDiscountInput
    redemptions?: RedemptionCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUncheckedCreateWithoutBusinessInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DiscountCategoryUncheckedCreateNestedManyWithoutDiscountInput
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutDiscountInput
  }

  export type DiscountCreateOrConnectWithoutBusinessInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutBusinessInput, DiscountUncheckedCreateWithoutBusinessInput>
  }

  export type DiscountCreateManyBusinessInputEnvelope = {
    data: DiscountCreateManyBusinessInput | DiscountCreateManyBusinessInput[]
  }

  export type BusinessCategoryCreateWithoutBusinessInput = {
    category: CategoryCreateNestedOneWithoutBusinessesInput
  }

  export type BusinessCategoryUncheckedCreateWithoutBusinessInput = {
    categoryId: string
  }

  export type BusinessCategoryCreateOrConnectWithoutBusinessInput = {
    where: BusinessCategoryWhereUniqueInput
    create: XOR<BusinessCategoryCreateWithoutBusinessInput, BusinessCategoryUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessCategoryCreateManyBusinessInputEnvelope = {
    data: BusinessCategoryCreateManyBusinessInput | BusinessCategoryCreateManyBusinessInput[]
  }

  export type RedemptionCreateWithoutBusinessInput = {
    id?: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
    user: UserCreateNestedOneWithoutRedemptionsInput
    discount: DiscountCreateNestedOneWithoutRedemptionsInput
  }

  export type RedemptionUncheckedCreateWithoutBusinessInput = {
    id?: string
    userId: string
    discountId: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
  }

  export type RedemptionCreateOrConnectWithoutBusinessInput = {
    where: RedemptionWhereUniqueInput
    create: XOR<RedemptionCreateWithoutBusinessInput, RedemptionUncheckedCreateWithoutBusinessInput>
  }

  export type RedemptionCreateManyBusinessInputEnvelope = {
    data: RedemptionCreateManyBusinessInput | RedemptionCreateManyBusinessInput[]
  }

  export type DiscountUpsertWithWhereUniqueWithoutBusinessInput = {
    where: DiscountWhereUniqueInput
    update: XOR<DiscountUpdateWithoutBusinessInput, DiscountUncheckedUpdateWithoutBusinessInput>
    create: XOR<DiscountCreateWithoutBusinessInput, DiscountUncheckedCreateWithoutBusinessInput>
  }

  export type DiscountUpdateWithWhereUniqueWithoutBusinessInput = {
    where: DiscountWhereUniqueInput
    data: XOR<DiscountUpdateWithoutBusinessInput, DiscountUncheckedUpdateWithoutBusinessInput>
  }

  export type DiscountUpdateManyWithWhereWithoutBusinessInput = {
    where: DiscountScalarWhereInput
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyWithoutBusinessInput>
  }

  export type DiscountScalarWhereInput = {
    AND?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
    OR?: DiscountScalarWhereInput[]
    NOT?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
    id?: StringFilter<"Discount"> | string
    code?: StringFilter<"Discount"> | string
    title?: StringFilter<"Discount"> | string
    description?: StringFilter<"Discount"> | string
    images?: StringNullableFilter<"Discount"> | string | null
    imageUrl?: StringNullableFilter<"Discount"> | string | null
    tierBasic?: BoolFilter<"Discount"> | boolean
    tierNormal?: BoolFilter<"Discount"> | boolean
    tierPremium?: BoolFilter<"Discount"> | boolean
    startAt?: DateTimeFilter<"Discount"> | Date | string
    endAt?: DateTimeFilter<"Discount"> | Date | string
    limitPerUser?: IntNullableFilter<"Discount"> | number | null
    limitTotal?: IntNullableFilter<"Discount"> | number | null
    usedTotal?: IntFilter<"Discount"> | number
    terms?: StringNullableFilter<"Discount"> | string | null
    status?: StringFilter<"Discount"> | string
    createdAt?: DateTimeFilter<"Discount"> | Date | string
    updatedAt?: DateTimeFilter<"Discount"> | Date | string
    businessId?: StringNullableFilter<"Discount"> | string | null
  }

  export type BusinessCategoryUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BusinessCategoryWhereUniqueInput
    update: XOR<BusinessCategoryUpdateWithoutBusinessInput, BusinessCategoryUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessCategoryCreateWithoutBusinessInput, BusinessCategoryUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessCategoryUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BusinessCategoryWhereUniqueInput
    data: XOR<BusinessCategoryUpdateWithoutBusinessInput, BusinessCategoryUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessCategoryUpdateManyWithWhereWithoutBusinessInput = {
    where: BusinessCategoryScalarWhereInput
    data: XOR<BusinessCategoryUpdateManyMutationInput, BusinessCategoryUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessCategoryScalarWhereInput = {
    AND?: BusinessCategoryScalarWhereInput | BusinessCategoryScalarWhereInput[]
    OR?: BusinessCategoryScalarWhereInput[]
    NOT?: BusinessCategoryScalarWhereInput | BusinessCategoryScalarWhereInput[]
    businessId?: StringFilter<"BusinessCategory"> | string
    categoryId?: StringFilter<"BusinessCategory"> | string
  }

  export type RedemptionUpsertWithWhereUniqueWithoutBusinessInput = {
    where: RedemptionWhereUniqueInput
    update: XOR<RedemptionUpdateWithoutBusinessInput, RedemptionUncheckedUpdateWithoutBusinessInput>
    create: XOR<RedemptionCreateWithoutBusinessInput, RedemptionUncheckedCreateWithoutBusinessInput>
  }

  export type RedemptionUpdateWithWhereUniqueWithoutBusinessInput = {
    where: RedemptionWhereUniqueInput
    data: XOR<RedemptionUpdateWithoutBusinessInput, RedemptionUncheckedUpdateWithoutBusinessInput>
  }

  export type RedemptionUpdateManyWithWhereWithoutBusinessInput = {
    where: RedemptionScalarWhereInput
    data: XOR<RedemptionUpdateManyMutationInput, RedemptionUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessCreateWithoutDiscountsInput = {
    id?: string
    code: string
    name: string
    ruc?: string | null
    address?: string | null
    contact?: string | null
    status?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: BusinessCategoryCreateNestedManyWithoutBusinessInput
    redemptions?: RedemptionCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutDiscountsInput = {
    id?: string
    code: string
    name: string
    ruc?: string | null
    address?: string | null
    contact?: string | null
    status?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: BusinessCategoryUncheckedCreateNestedManyWithoutBusinessInput
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutDiscountsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutDiscountsInput, BusinessUncheckedCreateWithoutDiscountsInput>
  }

  export type DiscountCategoryCreateWithoutDiscountInput = {
    category: CategoryCreateNestedOneWithoutDiscountsInput
  }

  export type DiscountCategoryUncheckedCreateWithoutDiscountInput = {
    categoryId: string
  }

  export type DiscountCategoryCreateOrConnectWithoutDiscountInput = {
    where: DiscountCategoryWhereUniqueInput
    create: XOR<DiscountCategoryCreateWithoutDiscountInput, DiscountCategoryUncheckedCreateWithoutDiscountInput>
  }

  export type DiscountCategoryCreateManyDiscountInputEnvelope = {
    data: DiscountCategoryCreateManyDiscountInput | DiscountCategoryCreateManyDiscountInput[]
  }

  export type RedemptionCreateWithoutDiscountInput = {
    id?: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
    user: UserCreateNestedOneWithoutRedemptionsInput
    business: BusinessCreateNestedOneWithoutRedemptionsInput
  }

  export type RedemptionUncheckedCreateWithoutDiscountInput = {
    id?: string
    userId: string
    businessId: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
  }

  export type RedemptionCreateOrConnectWithoutDiscountInput = {
    where: RedemptionWhereUniqueInput
    create: XOR<RedemptionCreateWithoutDiscountInput, RedemptionUncheckedCreateWithoutDiscountInput>
  }

  export type RedemptionCreateManyDiscountInputEnvelope = {
    data: RedemptionCreateManyDiscountInput | RedemptionCreateManyDiscountInput[]
  }

  export type BusinessUpsertWithoutDiscountsInput = {
    update: XOR<BusinessUpdateWithoutDiscountsInput, BusinessUncheckedUpdateWithoutDiscountsInput>
    create: XOR<BusinessCreateWithoutDiscountsInput, BusinessUncheckedCreateWithoutDiscountsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutDiscountsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutDiscountsInput, BusinessUncheckedUpdateWithoutDiscountsInput>
  }

  export type BusinessUpdateWithoutDiscountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: BusinessCategoryUpdateManyWithoutBusinessNestedInput
    redemptions?: RedemptionUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutDiscountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: BusinessCategoryUncheckedUpdateManyWithoutBusinessNestedInput
    redemptions?: RedemptionUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type DiscountCategoryUpsertWithWhereUniqueWithoutDiscountInput = {
    where: DiscountCategoryWhereUniqueInput
    update: XOR<DiscountCategoryUpdateWithoutDiscountInput, DiscountCategoryUncheckedUpdateWithoutDiscountInput>
    create: XOR<DiscountCategoryCreateWithoutDiscountInput, DiscountCategoryUncheckedCreateWithoutDiscountInput>
  }

  export type DiscountCategoryUpdateWithWhereUniqueWithoutDiscountInput = {
    where: DiscountCategoryWhereUniqueInput
    data: XOR<DiscountCategoryUpdateWithoutDiscountInput, DiscountCategoryUncheckedUpdateWithoutDiscountInput>
  }

  export type DiscountCategoryUpdateManyWithWhereWithoutDiscountInput = {
    where: DiscountCategoryScalarWhereInput
    data: XOR<DiscountCategoryUpdateManyMutationInput, DiscountCategoryUncheckedUpdateManyWithoutDiscountInput>
  }

  export type DiscountCategoryScalarWhereInput = {
    AND?: DiscountCategoryScalarWhereInput | DiscountCategoryScalarWhereInput[]
    OR?: DiscountCategoryScalarWhereInput[]
    NOT?: DiscountCategoryScalarWhereInput | DiscountCategoryScalarWhereInput[]
    discountId?: StringFilter<"DiscountCategory"> | string
    categoryId?: StringFilter<"DiscountCategory"> | string
  }

  export type RedemptionUpsertWithWhereUniqueWithoutDiscountInput = {
    where: RedemptionWhereUniqueInput
    update: XOR<RedemptionUpdateWithoutDiscountInput, RedemptionUncheckedUpdateWithoutDiscountInput>
    create: XOR<RedemptionCreateWithoutDiscountInput, RedemptionUncheckedCreateWithoutDiscountInput>
  }

  export type RedemptionUpdateWithWhereUniqueWithoutDiscountInput = {
    where: RedemptionWhereUniqueInput
    data: XOR<RedemptionUpdateWithoutDiscountInput, RedemptionUncheckedUpdateWithoutDiscountInput>
  }

  export type RedemptionUpdateManyWithWhereWithoutDiscountInput = {
    where: RedemptionScalarWhereInput
    data: XOR<RedemptionUpdateManyMutationInput, RedemptionUncheckedUpdateManyWithoutDiscountInput>
  }

  export type UserCreateWithoutRedemptionsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    tier: string
    status?: string
    role?: string
    tokenVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRedemptionsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    tier: string
    status?: string
    role?: string
    tokenVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRedemptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRedemptionsInput, UserUncheckedCreateWithoutRedemptionsInput>
  }

  export type DiscountCreateWithoutRedemptionsInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    business?: BusinessCreateNestedOneWithoutDiscountsInput
    categories?: DiscountCategoryCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUncheckedCreateWithoutRedemptionsInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessId?: string | null
    categories?: DiscountCategoryUncheckedCreateNestedManyWithoutDiscountInput
  }

  export type DiscountCreateOrConnectWithoutRedemptionsInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutRedemptionsInput, DiscountUncheckedCreateWithoutRedemptionsInput>
  }

  export type BusinessCreateWithoutRedemptionsInput = {
    id?: string
    code: string
    name: string
    ruc?: string | null
    address?: string | null
    contact?: string | null
    status?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountCreateNestedManyWithoutBusinessInput
    categories?: BusinessCategoryCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutRedemptionsInput = {
    id?: string
    code: string
    name: string
    ruc?: string | null
    address?: string | null
    contact?: string | null
    status?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountUncheckedCreateNestedManyWithoutBusinessInput
    categories?: BusinessCategoryUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutRedemptionsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutRedemptionsInput, BusinessUncheckedCreateWithoutRedemptionsInput>
  }

  export type UserUpsertWithoutRedemptionsInput = {
    update: XOR<UserUpdateWithoutRedemptionsInput, UserUncheckedUpdateWithoutRedemptionsInput>
    create: XOR<UserCreateWithoutRedemptionsInput, UserUncheckedCreateWithoutRedemptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRedemptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRedemptionsInput, UserUncheckedUpdateWithoutRedemptionsInput>
  }

  export type UserUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUpsertWithoutRedemptionsInput = {
    update: XOR<DiscountUpdateWithoutRedemptionsInput, DiscountUncheckedUpdateWithoutRedemptionsInput>
    create: XOR<DiscountCreateWithoutRedemptionsInput, DiscountUncheckedCreateWithoutRedemptionsInput>
    where?: DiscountWhereInput
  }

  export type DiscountUpdateToOneWithWhereWithoutRedemptionsInput = {
    where?: DiscountWhereInput
    data: XOR<DiscountUpdateWithoutRedemptionsInput, DiscountUncheckedUpdateWithoutRedemptionsInput>
  }

  export type DiscountUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneWithoutDiscountsNestedInput
    categories?: DiscountCategoryUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: DiscountCategoryUncheckedUpdateManyWithoutDiscountNestedInput
  }

  export type BusinessUpsertWithoutRedemptionsInput = {
    update: XOR<BusinessUpdateWithoutRedemptionsInput, BusinessUncheckedUpdateWithoutRedemptionsInput>
    create: XOR<BusinessCreateWithoutRedemptionsInput, BusinessUncheckedCreateWithoutRedemptionsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutRedemptionsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutRedemptionsInput, BusinessUncheckedUpdateWithoutRedemptionsInput>
  }

  export type BusinessUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountUpdateManyWithoutBusinessNestedInput
    categories?: BusinessCategoryUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountUncheckedUpdateManyWithoutBusinessNestedInput
    categories?: BusinessCategoryUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type DiscountCategoryCreateWithoutCategoryInput = {
    discount: DiscountCreateNestedOneWithoutCategoriesInput
  }

  export type DiscountCategoryUncheckedCreateWithoutCategoryInput = {
    discountId: string
  }

  export type DiscountCategoryCreateOrConnectWithoutCategoryInput = {
    where: DiscountCategoryWhereUniqueInput
    create: XOR<DiscountCategoryCreateWithoutCategoryInput, DiscountCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type DiscountCategoryCreateManyCategoryInputEnvelope = {
    data: DiscountCategoryCreateManyCategoryInput | DiscountCategoryCreateManyCategoryInput[]
  }

  export type BusinessCategoryCreateWithoutCategoryInput = {
    business: BusinessCreateNestedOneWithoutCategoriesInput
  }

  export type BusinessCategoryUncheckedCreateWithoutCategoryInput = {
    businessId: string
  }

  export type BusinessCategoryCreateOrConnectWithoutCategoryInput = {
    where: BusinessCategoryWhereUniqueInput
    create: XOR<BusinessCategoryCreateWithoutCategoryInput, BusinessCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BusinessCategoryCreateManyCategoryInputEnvelope = {
    data: BusinessCategoryCreateManyCategoryInput | BusinessCategoryCreateManyCategoryInput[]
  }

  export type DiscountCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: DiscountCategoryWhereUniqueInput
    update: XOR<DiscountCategoryUpdateWithoutCategoryInput, DiscountCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<DiscountCategoryCreateWithoutCategoryInput, DiscountCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type DiscountCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: DiscountCategoryWhereUniqueInput
    data: XOR<DiscountCategoryUpdateWithoutCategoryInput, DiscountCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type DiscountCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: DiscountCategoryScalarWhereInput
    data: XOR<DiscountCategoryUpdateManyMutationInput, DiscountCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BusinessCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BusinessCategoryWhereUniqueInput
    update: XOR<BusinessCategoryUpdateWithoutCategoryInput, BusinessCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<BusinessCategoryCreateWithoutCategoryInput, BusinessCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BusinessCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BusinessCategoryWhereUniqueInput
    data: XOR<BusinessCategoryUpdateWithoutCategoryInput, BusinessCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type BusinessCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: BusinessCategoryScalarWhereInput
    data: XOR<BusinessCategoryUpdateManyMutationInput, BusinessCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type DiscountCreateWithoutCategoriesInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    business?: BusinessCreateNestedOneWithoutDiscountsInput
    redemptions?: RedemptionCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUncheckedCreateWithoutCategoriesInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessId?: string | null
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutDiscountInput
  }

  export type DiscountCreateOrConnectWithoutCategoriesInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutCategoriesInput, DiscountUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutDiscountsInput = {
    id?: string
    slug: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businesses?: BusinessCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutDiscountsInput = {
    id?: string
    slug: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businesses?: BusinessCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutDiscountsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDiscountsInput, CategoryUncheckedCreateWithoutDiscountsInput>
  }

  export type DiscountUpsertWithoutCategoriesInput = {
    update: XOR<DiscountUpdateWithoutCategoriesInput, DiscountUncheckedUpdateWithoutCategoriesInput>
    create: XOR<DiscountCreateWithoutCategoriesInput, DiscountUncheckedCreateWithoutCategoriesInput>
    where?: DiscountWhereInput
  }

  export type DiscountUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: DiscountWhereInput
    data: XOR<DiscountUpdateWithoutCategoriesInput, DiscountUncheckedUpdateWithoutCategoriesInput>
  }

  export type DiscountUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneWithoutDiscountsNestedInput
    redemptions?: RedemptionUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    redemptions?: RedemptionUncheckedUpdateManyWithoutDiscountNestedInput
  }

  export type CategoryUpsertWithoutDiscountsInput = {
    update: XOR<CategoryUpdateWithoutDiscountsInput, CategoryUncheckedUpdateWithoutDiscountsInput>
    create: XOR<CategoryCreateWithoutDiscountsInput, CategoryUncheckedCreateWithoutDiscountsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutDiscountsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutDiscountsInput, CategoryUncheckedUpdateWithoutDiscountsInput>
  }

  export type CategoryUpdateWithoutDiscountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businesses?: BusinessCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutDiscountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businesses?: BusinessCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BusinessCreateWithoutCategoriesInput = {
    id?: string
    code: string
    name: string
    ruc?: string | null
    address?: string | null
    contact?: string | null
    status?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountCreateNestedManyWithoutBusinessInput
    redemptions?: RedemptionCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutCategoriesInput = {
    id?: string
    code: string
    name: string
    ruc?: string | null
    address?: string | null
    contact?: string | null
    status?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountUncheckedCreateNestedManyWithoutBusinessInput
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutCategoriesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutCategoriesInput, BusinessUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutBusinessesInput = {
    id?: string
    slug: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBusinessesInput = {
    id?: string
    slug: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBusinessesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBusinessesInput, CategoryUncheckedCreateWithoutBusinessesInput>
  }

  export type BusinessUpsertWithoutCategoriesInput = {
    update: XOR<BusinessUpdateWithoutCategoriesInput, BusinessUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BusinessCreateWithoutCategoriesInput, BusinessUncheckedCreateWithoutCategoriesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutCategoriesInput, BusinessUncheckedUpdateWithoutCategoriesInput>
  }

  export type BusinessUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountUpdateManyWithoutBusinessNestedInput
    redemptions?: RedemptionUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountUncheckedUpdateManyWithoutBusinessNestedInput
    redemptions?: RedemptionUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type CategoryUpsertWithoutBusinessesInput = {
    update: XOR<CategoryUpdateWithoutBusinessesInput, CategoryUncheckedUpdateWithoutBusinessesInput>
    create: XOR<CategoryCreateWithoutBusinessesInput, CategoryUncheckedCreateWithoutBusinessesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBusinessesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBusinessesInput, CategoryUncheckedUpdateWithoutBusinessesInput>
  }

  export type CategoryUpdateWithoutBusinessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBusinessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type RedemptionCreateManyUserInput = {
    id?: string
    discountId: string
    businessId: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
  }

  export type RedemptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: DiscountUpdateOneRequiredWithoutRedemptionsNestedInput
    business?: BusinessUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type RedemptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RedemptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscountCreateManyBusinessInput = {
    id?: string
    code: string
    title: string
    description: string
    images?: string | null
    imageUrl?: string | null
    tierBasic?: boolean
    tierNormal?: boolean
    tierPremium?: boolean
    startAt: Date | string
    endAt: Date | string
    limitPerUser?: number | null
    limitTotal?: number | null
    usedTotal?: number
    terms?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessCategoryCreateManyBusinessInput = {
    categoryId: string
  }

  export type RedemptionCreateManyBusinessInput = {
    id?: string
    userId: string
    discountId: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
  }

  export type DiscountUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DiscountCategoryUpdateManyWithoutDiscountNestedInput
    redemptions?: RedemptionUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DiscountCategoryUncheckedUpdateManyWithoutDiscountNestedInput
    redemptions?: RedemptionUncheckedUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tierBasic?: BoolFieldUpdateOperationsInput | boolean
    tierNormal?: BoolFieldUpdateOperationsInput | boolean
    tierPremium?: BoolFieldUpdateOperationsInput | boolean
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    limitPerUser?: NullableIntFieldUpdateOperationsInput | number | null
    limitTotal?: NullableIntFieldUpdateOperationsInput | number | null
    usedTotal?: IntFieldUpdateOperationsInput | number
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCategoryUpdateWithoutBusinessInput = {
    category?: CategoryUpdateOneRequiredWithoutBusinessesNestedInput
  }

  export type BusinessCategoryUncheckedUpdateWithoutBusinessInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCategoryUncheckedUpdateManyWithoutBusinessInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type RedemptionUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRedemptionsNestedInput
    discount?: DiscountUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type RedemptionUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    discountId?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RedemptionUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    discountId?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscountCategoryCreateManyDiscountInput = {
    categoryId: string
  }

  export type RedemptionCreateManyDiscountInput = {
    id?: string
    userId: string
    businessId: string
    redeemedAt?: Date | string
    channel?: string
    meta?: string | null
  }

  export type DiscountCategoryUpdateWithoutDiscountInput = {
    category?: CategoryUpdateOneRequiredWithoutDiscountsNestedInput
  }

  export type DiscountCategoryUncheckedUpdateWithoutDiscountInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscountCategoryUncheckedUpdateManyWithoutDiscountInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type RedemptionUpdateWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRedemptionsNestedInput
    business?: BusinessUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type RedemptionUncheckedUpdateWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RedemptionUncheckedUpdateManyWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscountCategoryCreateManyCategoryInput = {
    discountId: string
  }

  export type BusinessCategoryCreateManyCategoryInput = {
    businessId: string
  }

  export type DiscountCategoryUpdateWithoutCategoryInput = {
    discount?: DiscountUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type DiscountCategoryUncheckedUpdateWithoutCategoryInput = {
    discountId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscountCategoryUncheckedUpdateManyWithoutCategoryInput = {
    discountId?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCategoryUpdateWithoutCategoryInput = {
    business?: BusinessUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type BusinessCategoryUncheckedUpdateWithoutCategoryInput = {
    businessId?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCategoryUncheckedUpdateManyWithoutCategoryInput = {
    businessId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessCountOutputTypeDefaultArgs instead
     */
    export type BusinessCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiscountCountOutputTypeDefaultArgs instead
     */
    export type DiscountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiscountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessDefaultArgs instead
     */
    export type BusinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiscountDefaultArgs instead
     */
    export type DiscountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiscountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RedemptionDefaultArgs instead
     */
    export type RedemptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RedemptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiscountCategoryDefaultArgs instead
     */
    export type DiscountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiscountCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessCategoryDefaultArgs instead
     */
    export type BusinessCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessCategoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}