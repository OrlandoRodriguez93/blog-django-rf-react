# """
# Permite el correcto funcionamiento de S3
# """
# from storages.backends.s3boto3 import S3Boto3Storage


# class StaticsStorage(S3Boto3Storage):
#     location = 'static'
#     default_acl = 'private'

# class MediaStore(S3Boto3Storage):
#     location = 'static'
#     file_overwrite = False